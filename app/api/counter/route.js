import { kv } from '@vercel/kv';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const label = searchParams.get('label') || 'Profile Views';
  const color = searchParams.get('color') || 'purple';
  const style = searchParams.get('style') || 'for-the-badge';
  const logo = searchParams.get('logo') || '';

  try {
    const count = await kv.incr('profile_views');
    
    // 使用 shields.io 生成徽章
    let shieldsUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${count}-${color}?style=${style}`;
    if (logo) {
      shieldsUrl += `&logo=${logo}&logoColor=white`;
    }
    
    const response = await fetch(shieldsUrl);
    const svg = await response.text();

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  } catch (error) {
    const shieldsUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-error-red?style=${style}`;
    const response = await fetch(shieldsUrl);
    const svg = await response.text();

    return new Response(svg, {
      status: 500,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  }
}
