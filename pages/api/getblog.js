// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//localhost:3000/api/getblog?slug=learn-javascript

const fs = require('fs');

export default async function handler(req, res) {
   fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" })
    }
    res.status(200).json(JSON.parse(data))
  })
}
