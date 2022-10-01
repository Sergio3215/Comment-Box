import { useState, useEffect } from "react";
import Likes from "./Like";

export default function ReadCommentBox(props) {

    const [comment, setComment] = useState([]);
    
    const getComment = async () => {
        const ftch = await fetch(`/api/getComment`);
        const res = await ftch.json();
        setComment(res.commentList);
    };
    useEffect(() => {
        getComment();
    }, [])

    useEffect(() => {
        getComment();
    }, [props.render])

    let style = {
        imageStyle: {
            width: "2rem",
            cursor: "pointer",
        },
        commentListStyle: {
            margin: 5,
            border: "1px solid black",
            borderRadius: "5px",
            width: "40%",
            textAlign: "center",
            padding: 5,
            marginBottom: 15,
        },
        user: {
            margin: 5,
            textAlign: "left",
            padding: 5
        },
        tool: {
            margin: 5,
            textAlign: "left",
            padding: 5
        },
        comment: {
            border: "1px solid black",
            borderRadius: "5px",
            padding: 10 + "px",
            margin: 10 + "px"
        }
    }
    return (
        <div>

            {
                (comment.length > 0) ?
                    comment.map(com => {
                        return (
                            <div style={style.commentListStyle}>
                                <div style={style.user}>
                                    {com.username}
                                    &nbsp; <label>
                                        {com.date} {com.hours}
                                    </label>
                                </div>
                                <div style={style.comment}>
                                    {com.comment}
                                </div>
                                <div style={style.tool}>
                                    {<Likes like={com.like} style={style}
                                    id={com.__id}
                                    />
                                    }
                                </div>
                            </div>
                        )
                    })
                    :
                    <>No hay comentarios</>
            }
        </div>
    )
}