import { firebase, app, db } from '../../db'
import { getDoc, getDocs, doc, collection, where, query } from 'firebase/firestore';
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    const { comment } = req.query;
    const {Token} = req.cookies

    try {
        const account = jwt.verify(Token, process.env.palabraSecreta);

        const commentCol = collection(db, 'Comments');
        const queryConsultant = query(commentCol, where('user', "!=", 'default'));
        const commentSnapshot = await getDocs(queryConsultant);
        const commentList = commentSnapshot.docs.map(doc => doc.data());
        

        commentList.map(async (doc)=>{

            let likeConfirmed = false;
            // console.log(doc.like)

            doc.like.map(lk=>{
                if(account.__id == lk.id){
                    likeConfirmed = lk.like;
                }
            })

            let dateFirebase = doc.date
            doc.like = likeConfirmed;
            doc.reply = [];
            doc.arrayUsers = [];
            doc.date= new Date(dateFirebase.toDate()).toLocaleDateString();
            doc.hours= new Date(dateFirebase.toDate()).toLocaleTimeString();
        })

        res.json({commentList})

    } catch (err) {
        console.log(err)
        res.json({ data: [], error: err.message, success:false  });
    }
}
