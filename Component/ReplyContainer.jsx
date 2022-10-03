import Likes from "./Like"

export default function RepliedMessage(props) {
    // console.log(props);
    let style = {
        container:{
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
            //border-radius:"5px"
            borderRadius: "5px",
            width: "30%",
            minWidth: "250px",
            maxWidth: "300px",
            height:"150px",
            textAlign: "center",
            padding: 5,
            marginBottom: 15,
            fontSize: "1rem",
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
            padding: 2 + "px",
            margin: 2 + "px"
        }
    }
    return (
        <div style={style.container}>
            {
                (props.reply.length > 0 & props.reply != undefined) ?
                    props.reply.map(rp => {
                        console.log(rp)
                        return (
                            <div style={style.commentListStyle}>
                                <div style={style.user}>
                                    {rp.username}
                                    &nbsp; <label>
                                        {rp.date} {rp.hours}
                                    </label></div>
                                <div style={style.comment}>
                                    {rp.comment}
                                </div>
                                <div style={style.tool}>
                                    {<Likes like={rp.like}
                                        id={rp.commentId} style={style}
                                        reply={true} idReply={rp.id}
                                    />
                                    }
                                </div>
                            </div>
                        )
                    })
                    :
                    <>No hay respuesta</>
            }
        </div>
    )
}