import { kv } from '@vercel/kv';
import { badgen } from 'badgen';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const label = searchParams.get('label') || 'Profile Views';
  const color = searchParams.get('color') || 'purple';
  const style = searchParams.get('style') || 'classic';

  try {
    const count = await kv.incr('profile_views');

    const svg = badgen({
      label,
      status: count.toLocaleString(),
      color,
      style,
    });

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  } catch (error) {
    const svg = badgen({
      label,
      status: 'error',
      color: 'red',
      style,
    });

    return new Response(svg, {
      status: 500,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  }
}
