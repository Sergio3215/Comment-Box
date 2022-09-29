import { useEffect, useState } from "react"
import CommentBoxContainer from "../Component/CommentBoxContainer";

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
        <>
            <div>
                {name}
                <button onClick={() => logout()}>Desconectarse</button>
            </div>
            <CommentBoxContainer />
        </>
    )
}