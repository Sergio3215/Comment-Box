import { useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import Likes from "./Like";
import RepliedMessage from "./ReplyContainer";
import Link from "next/link"
import styles from "../components/linkRedirect.module.css"

export default function ReadCommentBox(props) {

    const [comment, setComment] = useState([]);
    const [render, setRender] = useState(false);

    const getComment = async () => {
        console.log(props.id)
        if (props.id == undefined) {
            const ftch = await fetch(`/api/getComment`);
            const res = await ftch.json();
            setComment(res.commentList);
        }
        else {

            // /api/getCommentOne?id=k7I21UaxoFNWI0M1UgzK
            // /lab2/comment/dGvrgTKw9balzS9Oto5u
            const ftch = await fetch(`/api/getCommentOne?id=${props.id}`);
            const res = await ftch.json();
            setComment(res.commentList);
        }
    };
    useEffect(() => {
        getComment();
    }, [])

    useEffect(() => {
        getComment();
    }, [props.render])

    useEffect(() => {
        getComment();
    }, [render])
    let style = {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
        },
        imageStyle: {
            width: "2rem",
            cursor: "pointer",
        },
        commentListStyle: {
            margin: 5,
            border: "1px solid black",
            borderRadius: "5px",
            width: "40%",
            minWidth: "350px",
            maxWidth: "500px",
            textAlign: "center",
            padding: 5,
            marginBottom: 15,
            fontSize: "22px",
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

    const rendered = () => {
        let ren = !render;
        setRender(ren)
    }

    return (
        <div style={style.container}>

            {
                (comment.length > 0) ?
                    comment.map(com => {
                        return (
                            <div>
                                <div style={style.commentListStyle}>
                                    <div style={style.user}>
                                        {com.username}
                                        &nbsp;
                                        {
                                            (props.id == undefined) ?
                                                <Link href={`/${com.username}/comment/${com.__id}`}>
                                                    <label className={styles.linkRedirect}>
                                                        {com.date} {com.hours}
                                                    </label>
                                                </Link>
                                                :
                                                <label>
                                                    {com.date} {com.hours}
                                                </label>
                                        }
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
                                {
                                    <div>
                                        <CommentBox reply={true} id={com.__id} rendered={rendered}>
                                            Responde este comentario
                                        </CommentBox>
                                        <RepliedMessage reply={com.reply} __id={com.__id} />
                                    </div>

                                }
                            </div>
                        )
                    })
                    :
                    <>No hay comentarios</>
            }
        </div>
    )
}