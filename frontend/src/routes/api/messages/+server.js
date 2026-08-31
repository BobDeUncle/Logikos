export async function GET() {
  const res = await fetch('http://backend:3000/api/messages');
  const data = await res.json();
  return new Response(JSON.stringify(data));
}

export async function POST({ request }) {
  const body = await request.json();
  const res = await fetch('http://backend:3000/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
}