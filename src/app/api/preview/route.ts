import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams.get("url");
  if (!urlParam) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const targetUrl = new URL(urlParam);

    // Whitelist check: allow valid project hosts, custom domains, and Vercel/Netlify preview deployments
    const hostname = targetUrl.hostname.toLowerCase();
    const isAllowed =
      hostname.endsWith(".vercel.app") ||
      hostname.endsWith(".netlify.app") ||
      hostname === "northdemy.com" ||
      hostname.endsWith(".northdemy.com") ||
      hostname === "thezango.com" ||
      hostname.endsWith(".thezango.com") ||
      hostname === "360radiotv.com" ||
      hostname.endsWith(".360radiotv.com") ||
      hostname === "sicolines.com" ||
      hostname.endsWith(".sicolines.com") ||
      hostname === "zyradex.com" ||
      hostname.endsWith(".zyradex.com");

    if (!isAllowed) {
      return new NextResponse("Hostname not allowed for preview proxy", { status: 403 });
    }

    const upstreamRes = await fetch(targetUrl.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      next: { revalidate: 1800 },
    });

    if (!upstreamRes.ok) {
      // Graceful styled fallback page if upstream returns 404 or error
      const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${targetUrl.hostname} Standby</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #06070a;
      color: #94a3b8;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      text-align: center;
    }
    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 32px 24px;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 11px;
      background: rgba(56, 189, 248, 0.1);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.2);
      margin-bottom: 16px;
    }
    h2 {
      color: #ffffff;
      font-size: 17px;
      margin: 0 0 10px 0;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    p {
      font-size: 12px;
      line-height: 1.6;
      margin: 0 0 24px 0;
      color: #94a3b8;
    }
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: #38bdf8;
      color: #000000;
      padding: 10px 20px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 12px;
      font-weight: 600;
      transition: opacity 0.2s;
    }
    a:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">● LIVE PORTAL STANDBY</div>
    <h2>${targetUrl.hostname}</h2>
    <p>This deployment is currently in standby mode or cycling releases. Access the verified endpoint directly below.</p>
    <a href="${targetUrl.toString()}" target="_blank" rel="noopener noreferrer">Launch Destination Portal ↗</a>
  </div>
</body>
</html>`;
      return new NextResponse(fallbackHtml, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Frame-Options": "SAMEORIGIN",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    let html = await upstreamRes.text();

    // Strip any meta tags that enforce CSP or XFO client-side
    html = html.replace(/<meta[^>]*http-equiv=["']?(?:content-security-policy|x-frame-options)["']?[^>]*>/gi, "");

    // Inject base href tag, frame-busting isolation, and asset request interceptor
    const baseHref = `${targetUrl.protocol}//${targetUrl.host}/`;
    const interceptorScript = `
<base href="${baseHref}" target="_blank">
<script>
  try {
    Object.defineProperty(window, 'top', { get: function() { return window; }, set: function() {}, configurable: true });
    Object.defineProperty(window, 'parent', { get: function() { return window; }, set: function() {}, configurable: true });
  } catch (e) {
    try {
      window.top = window.self;
      window.parent = window.self;
    } catch (err) {}
  }

  // Intercept relative fetch and XHR requests and route them to real origin to avoid 404s on host
  (function() {
    var realOrigin = "${targetUrl.origin}";
    var originalFetch = window.fetch;
    if (originalFetch) {
      window.fetch = function(input, init) {
        try {
          if (typeof input === "string" && input.startsWith("/") && !input.startsWith("//")) {
            input = realOrigin + input;
          } else if (input && typeof input === "object" && input.url && input.url.indexOf(window.location.origin + "/") === 0) {
            input = new Request(realOrigin + input.url.slice(window.location.origin.length), init || input);
          }
        } catch (err) {}
        return originalFetch.call(this, input, init);
      };
    }
    if (window.XMLHttpRequest) {
      var originalOpen = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function(method, url) {
        try {
          if (typeof url === "string" && url.startsWith("/") && !url.startsWith("//")) {
            url = realOrigin + url;
          }
        } catch (err) {}
        return originalOpen.apply(this, arguments);
      };
    }
  })();
</script>`;

    if (html.includes("<head>")) {
      html = html.replace("<head>", `<head>${interceptorScript}`);
    } else if (html.includes("<head ")) {
      html = html.replace(/<head[^>]*>/, `$&${interceptorScript}`);
    }

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "public, max-age=1800, s-maxage=3600",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(`Preview proxy error: ${message}`, { status: 500 });
  }
}
