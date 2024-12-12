export default function handler(req, res) {
  const { name } = req.query; // Extract `name` from query parameters
  if (req.method === 'GET') {
    res.status(200).send(`HELLO, ${name || 'Guest'}!`); // Provide a default for `name` if not provided
  } else {
    res.status(405).send({ error: 'Method Not Allowed' });
  }
}