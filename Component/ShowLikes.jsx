import styles from '../components/UsersLikes.module.css';
export default function ShowLikes(props){
    const style = {
        container:{
            position:"absolute",
            border: "1px solid black",
            backgroundColor: "rgba(55,55,55,0.5",
            width:"99%",
            height: "100%",
            margin:0,
            padding:0,
            top:-2+"px",
            left:0
        },
        items:{
            border: "1px solid black",
            backgroundColor: "rgb(255,255,255",
            borderRadius: "15px",
            width: "40%",
            padding: "10px",
            textAlign:"center",
        }
    }

    return(
        <div style={style.container}>
            <div style={style.items}>
            <h1>Me gusta ❤</h1>
            <button onClick={props.close} className={styles.bntClose}>X</button>
                {
                    props.people.map((pp)=>{
                        return(
                            <div>
                                {pp.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}