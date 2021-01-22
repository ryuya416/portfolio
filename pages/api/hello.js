// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(300).json({"text": "fo"})
  } else {
    res.status(200).json({ "text": "test", "method": req.method })
  }
}