import { useState } from "react";

export default function CommentBox(props) {

    const [comment, setComment] = useState("");

    const handlerClick = async () => {
        if (props.reply === undefined) {
            const ftch = await fetch(`/api/addComment?comment=${comment}`);
            const res = await ftch.json();

            if (res.success) {
                document.querySelector('#comment--Comment').value = "";
            }
            props.__onRenderLayout();
        }
        else {
            const ftch = await fetch(`/api/updateReply?id=${props.id}&comment=${comment}`);
            const res = await ftch.json();
            props.rendered();
            document.querySelector('#'+props.id).value = "";
        }
    }

    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            <div>
                {props.children}
            </div>
            <div>
                <textarea id={(props.reply === undefined)?"comment--Comment": props.id} onChange={(e) => setComment(e.target.value)}>
                </textarea>
            </div>

            <div>
                <button disabled={(comment.trim() == "") ? true : false} onClick={handlerClick}>Enviar</button>
            </div>
        </div>
    )
}