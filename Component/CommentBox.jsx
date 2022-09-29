import { useState } from "react";

export default function CommentBox(props) {

    const [comment, setComment] = useState("");

    const handlerClick = async ()=>{
        const ftch = await fetch(`http://localhost:3000/api/addComment?comment=${comment}`);
        const res = await ftch.json();

        if(res.success){
            document.querySelector('#comment--Comment').value = "";
            props.onRenderLayout();
        }
    }

    return (
        <div>
            <div>
                <h1>Haz tu comentario en esta pagina</h1>
            </div>
            <div>
                <textarea id="comment--Comment" onChange={(e)=>setComment(e.target.value)}>
                </textarea>
            </div>

            <div>
                <button disabled={(comment.trim() == "")?true:false} onClick={handlerClick}>Enviar</button>
            </div>
        </div>
    )
}