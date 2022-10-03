import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import ReadCommentBox from '../../../Component/ReadComment';
import RepliedMessage from '../../../Component/ReplyContainer';
export default function ViewComment(){

    const router = useRouter();
    const {username, idComment} = router.query;
    console.log(idComment)
    return(
        <>
        {
            (idComment != undefined)?
            <ReadCommentBox id={idComment}/>
            :
            null
        }
        </>
    )
}