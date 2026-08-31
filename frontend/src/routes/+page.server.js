export async function load() {
  const res = await fetch('http://backend:3000/api/messages');
  const messages = await res.json();
  return { messages };
}