import { firebase, app, db } from '../../db'
import { getDocs, doc, collection, where, query } from 'firebase/firestore';
const jwt = require('jsonwebtoken');

const createToken = (userToken, secretWord, expiresIn) => {
    // console.log(userToken);
    const { __id, email, password, account, name } = userToken;
    return jwt.sign({ __id, email, name, account, password }, secretWord, { expiresIn });
}

export default async function handler(req, res) {
    const { comment } = req.query;
    const {Token} = req.cookies

    try {
        const account = jwt.verify(Token, process.env.palabraSecreta);

        const commentCol = collection(db, 'Comments');
        const queryConsultant = query(commentCol, where('user', "!=", 'default'));
        const commentSnapshot = await getDocs(queryConsultant);
        const commentList = commentSnapshot.docs.map(doc => doc.data());
        
        commentList.map(doc=>{
            doc.like = false;
            doc.reply = [];
            doc.arrayUsers = [];
        })

        res.json({commentList})

    } catch (err) {
        console.log(err)
        res.json({ data: [], error: err.message, success:false  });
    }
}
