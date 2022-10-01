import { useEffect, useState } from "react";

export default function Likes(props){

    const [like,setLike]  = useState(false);
    const [render,setRender]  = useState(false);

    const style = {
        button:{
            border:0,
            backgroundColor: 'transparent'
        }
    };

    const getLikes = async ()=>{
        const ftch = await fetch(`/api/getLike?id=${props.id}`);
        const res = await ftch.json();
        setLike(res)
    }

    const updateLike = ()=>{
        const rendered = !render;
        setRender(rendered)
    }

    useEffect(()=>{
        getLikes();
    },[])

    
    useEffect(()=>{
        getLikes();
    },[render])

    const handlerClick = async ()=>{
        const ftch = await fetch(`/api/updateLike?id=${props.id}&like=${props.like}`);
        const res = await ftch.json();
        updateLike();
    }
    return(
        <button style={style.button} onClick={handlerClick}>
            {like.length}
        {(like.likes) ?
            <img src="/like.png" style={props.style.imageStyle} /> :
            <img src="/no-like.png" style={props.style.imageStyle} />
        }
        </button>
    )

}