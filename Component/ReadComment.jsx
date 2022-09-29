import { useState, useEffect } from "react";
import Likes from "./Like";

export default function ReadCommentBox() {

    const [comment, setComment] = useState([]);

    // const handlerClick = async ()=>{
    //     const ftch = await fetch(`http://localhost:3000/api/addComment?comment=${comment}`);
    //     const res = await ftch.json();

    //     if(res.success){
    //         document.querySelector('#comment--Comment').value = "";
    //     }
    // }
    useEffect(() => {
        const getComment = async () => {
            const ftch = await fetch(`/api/getComment`);
            const res = await ftch.json();
            setComment(res.commentList);
        };
        getComment();
    }, [])

    let style = {
        imageStyle: {
            width: "2rem",
            cursor: "pointer",
        },
        commentListStyle: {
            margin: 5,
            border: "1px solid black",
            borderRadius: "5px",
            width:"40%",
            textAlign: "center",
            padding: 5,
            marginBottom: 15,
        },
        user:{
            margin: 5,
            textAlign: "left",
            padding: 5
        },
        tool:{
            margin: 5,
            textAlign: "left",
            padding: 5
        },
        comment:{
            border: "1px solid black",
            borderRadius: "5px",
            width:"40%",
            padding:10+"px",
            margin:10+"px"
        }
    }
    return (
        <div>

            {
                comment.map(com => {
                    return (
                        <div style={style.commentListStyle}>
                            <div style={style.user}>
                                {com.username}
                            </div>
                            <div style={style.comment}>
                                {com.comment}
                            </div>
                            <div style={style.tool}>
                                {<Likes like={com.like} style={style} />
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}