import { firebase, app, db } from '../../db'
import { addDoc, updateDoc, doc, collection } from 'firebase/firestore';
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
        // console.log(account.__id);

        const docRef = await addDoc(collection(db, "Comments"), {
            user: account.__id,
            username: account.name,
            comment: comment,
            like:[],
            reply:[],
            date: new Date()
          });
      
          //Update
          const docUpdated = await updateDoc(doc(db, "Comments", docRef.id),{
            __id:docRef.id
          })
        
        res.json({success:true})

    } catch (err) {
        console.log(err)
        res.json({ data: [], error: err.message, success:false  });
    }
}


/*
    //Post
  try {
    const docRef = await addDoc(collection(db, "Task"), {
      name: "Prueba 1",
      date: "25/08/2022"
    });
    console.log("Document written with ID: ", docRef.id);

    //Update
    const docUpdated = await updateDoc(doc(db, "Task", docRef.id),{
      __id:docRef.id
    })

    //Get One
    try {
    const docGetOne = await getDoc(doc(db, "Task", docRef.id))
    console.log(docGetOne.data());
    } catch (err) {
      console.log(err)
    }

    //Get One by data
    // const taskCol1 = collection(db, 'Task');
    // const queryConsultant = query(taskCol1, where('name',"==","Prueba"));
    // const taskSnapshot1 = await getDocs(queryConsultant);
    // let taskList1;
    // taskSnapshot1.forEach(doc => taskList1 = doc.data());
    // console.log(taskList1)
    // console.log(taskList1 != undefined)


    //Delete
    await deleteDoc(doc(db,"Task",docRef.id))

  } catch (e) {
    console.error("Error adding document: ", e);
  }
    //Get
  const taskCol = collection(db, 'Task');
  const taskSnapshot = await getDocs(taskCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  res.status(200).json(taskList)
 */