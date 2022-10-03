import { useEffect, useState } from "react"
import CommentBoxContainer from "../Component/CommentBoxContainer";
import style from '../components/navBar.module.css';

export default function App() {

    const [name, setName] = useState("")

    useEffect(() => {
        const getData = async () => {
            let ftch = await fetch('/api/getUser');
            let res = await ftch.json();

            setName(res.name)
        }
        getData();
    },
        []);

    const logout = async () => {
        const ftch = await fetch('/api/logout');
        window.location.reload(true);
    }
    return (
        <div>
            <div className={style.container}>
                <span>{name}</span>
                <button onClick={() => logout()} className={style.btnLogout}>Desconectarse</button>
            </div>
            <CommentBoxContainer />
        </div>
    )
}