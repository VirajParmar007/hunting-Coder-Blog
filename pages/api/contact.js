const fs = require('fs');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('contactdata')
        // Process a POST request
        fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body), () => { })
        res.status(200).json(req.body)
    } else {
        // Handle any other HTTP method
        res.status(200).json(["name", "email", "phone", "message"])
    }
}