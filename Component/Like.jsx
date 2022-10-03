import { useEffect, useState } from "react";
import ShowLikes from "./ShowLikes";

export default function Likes(props) {

    const [like, setLike] = useState([]);
    const [render, setRender] = useState(false);
    const [open, setOpen] = useState(false);

    const style = {
        button: {
            border: 0,
            backgroundColor: 'transparent'
        }
    };

    const getLikes = async () => {
        let url= "";
        if(props.reply == undefined){
            url = `/api/getLike?id=${props.id}&reply=${props.reply}`;
        }
        else{
            url = `/api/getLikeReply?id=${props.id}&reply=${props.reply}&idReply=${props.idReply}`
        }
        const ftch = await fetch(url);
        const res = await ftch.json();
        // console.log(res.people)
        setLike(res);
    }

    const updateLike = () => {
        const rendered = !render;
        setRender(rendered)
    }

    useEffect(() => {
        getLikes();
    }, [])


    useEffect(() => {
        getLikes();
    }, [render])

    const handlerClick = async () => {
        let reply = props.reply
        if (props.reply == undefined) {
            const ftch = await fetch(`/api/updateLike?id=${props.id}&like=${props.like}`);
            const res = await ftch.json();
            updateLike();
        }
        else {
            const ftch = await fetch(`/api/updateLikeReply?id=${props.id}&like=${props.like}&reply=${reply}&idReply=${props.idReply}`);
            const res = await ftch.json();
            updateLike();
        }
    }

    const SetComma = (names, index, people, like) => {
        people = people.filter(dt => dt.like == true);

        let str = "";
        if (like) {
            str = names;
            let separated = "";
            // console.log(people.length, names)
            if (people.length != 1) {
                separated = " , "
            }
            if (index == people.length - 2 && people.length != 2) {
                separated = " y "
            }
            if (index == people.length - 1 && people.length == 2) {
                separated = " y "
            }

            if (index == people.length && people.length == 2) {
                separated = ""
            }

            if (index == people.length - 1 && people.length != 2) {
                separated = ""
            }


            str += separated
        }

        if (index == 2 && people.length != 2 && people.length != 1) {
            str = " mas"
        }


        return str
    }

    return (
        <>
            <div onClick={() => setOpen(!open)} style={
                (like.people != undefined) ?
                    (like.people.filter(dt => dt.like == true).length >= 3) ?
                        { cursor: "pointer" } : {}
                    :
                    null
            }>
                {
                    (like.people != undefined) ?
                        like.people.map((lk, index) => {
                            return (
                                <> {
                                    SetComma(lk.name, index, like.people, lk.like)
                                }
                                </>
                            )
                        })
                        :
                        null
                }
            </div>
            {
                (like.people != undefined) ?

                    (open && like.people.filter(dt => dt.like == true).length >= 3) ?
                        <ShowLikes people={like.people.filter(dt => dt.like == true)} close={() => setOpen(!open)} />
                        :
                        null
                    :
                    null
            }
            <button style={style.button} onClick={handlerClick}>
                {like.length}
                {(like.likes) ?
                    <img src="/like.png" style={props.style.imageStyle} /> :
                    <img src="/no-like.png" style={props.style.imageStyle} />
                }
            </button>
        </>
    )

}