import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams.get("url");
  if (!urlParam) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const targetUrl = new URL(urlParam);

    // Whitelist allowed hostnames for previewing
    const allowedHosts = [
      "stormsale-one.vercel.app",
      "storm-sale.vercel.app",
      "vera-os-xi.vercel.app",
      "stellar-market-pay.vercel.app",
      "northdemy.com",
      "360radiotv.com",
      "sicolines.com",
      "zyradex.com",
      "fixeroni-page.netlify.app",
      "accensa-dashboard.vercel.app",
      "stellar-indigo-pay.vercel.app",
      "safe-swap-landing.vercel.app",
      "audio-blocks-frontend-v1.vercel.app",
      "b-buildathon-board.vercel.app",
      "starkpulse.vercel.app",
      "eduvault-alpha.vercel.app",
    ];

    const hostAllowed = allowedHosts.some(
      (host) => targetUrl.hostname === host || targetUrl.hostname.endsWith("." + host)
    );

    if (!hostAllowed) {
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
      return new NextResponse(
        `Upstream returned status ${upstreamRes.status}: ${upstreamRes.statusText}`,
        { status: upstreamRes.status }
      );
    }

    let html = await upstreamRes.text();

    // Inject base href tag so all relative assets, scripts, and styles resolve to upstream origin
    const baseHref = `${targetUrl.protocol}//${targetUrl.host}/`;
    if (html.includes("<head>")) {
      html = html.replace("<head>", `<head><base href="${baseHref}">`);
    } else if (html.includes("<head ")) {
      html = html.replace(/<head[^>]*>/, `$&<base href="${baseHref}">`);
    }

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        // Permissive framing header to allow embedding in our own portfolio app
        "X-Frame-Options": "SAMEORIGIN",
        "Cache-Control": "public, max-age=1800, s-maxage=3600",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(`Preview proxy error: ${message}`, { status: 500 });
  }
}
