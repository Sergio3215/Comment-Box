export default function Likes(props){

    return(
        <>
        {(props.like) ?
            <img src="/like.png" style={props.style.imageStyle} /> :
            <img src="/no-like.png" style={props.style.imageStyle} />
        }
        </>
    )

}