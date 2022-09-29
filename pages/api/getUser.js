const {jwtVerify} = require('jose');

export default async function handler(req, res) {

    const token = req.cookies.Token;

    
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.palabraSecreta))

    res.json({name:payload.name})
}