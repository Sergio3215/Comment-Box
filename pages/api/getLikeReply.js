import { firebase, app, db } from '../../db'
import { getDoc, getDocs, doc, collection, where, query } from 'firebase/firestore';
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    const { id, idReply} = req.query;
    const { Token } = req.cookies

    try {
        // console.log(idReply)
        const account = jwt.verify(Token, process.env.palabraSecreta);

        const docGetOne = await getDoc(doc(db, "Comments", id));

        const likes = docGetOne.data().reply;

        //console.log(likes.filter(rp=>rp.id == idReply)[0].like.filter(lk => lk.id === account.__id))

        const liked = likes.filter(rp=>rp.id == idReply)[0].like.filter(lk => lk.id === account.__id);

        
        let confirm = false;
        if (liked.length > 0) {
            //console.log(liked)
            confirm = liked[0].like;
        }

        const count = likes.filter(rp=>rp.id == idReply)[0].like.filter(lk => lk.like == true).length;


        // console.log(docGetOne.data());

        res.json({ likes:confirm, length:count, people: likes.filter(rp=>rp.id == idReply)[0].like})

    } catch (err) {
        // console.log(err)
        res.json({ data: [], error: err.message, success: false });
    }
}