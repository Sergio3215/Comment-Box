import { firebase, app, db } from '../../db'
import { getDoc, getDocs, doc, collection, where, query } from 'firebase/firestore';
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    const { id } = req.query;
    const { Token } = req.cookies

    try {
        const account = jwt.verify(Token, process.env.palabraSecreta);

        const docGetOne = await getDoc(doc(db, "Comments", id));

        let likes = docGetOne.data().like;

        const liked = likes.filter(lk => lk.id === account.__id);
        
        let confirm = false;
        if (liked.length > 0) {
            confirm = liked[0].like;
        }

        const count = docGetOne.data().like.filter(lk => lk.like == true).length;


        // console.log(docGetOne.data());

        res.json({ likes:confirm, length:count, people: docGetOne.data().like})

    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}