import { useState } from "react";
import CommentBox from "./CommentBox";
import ReadCommentBox from "./ReadComment";

export default function CommentBoxContainer() {

    const [render, setRender] = useState(false);

    const __onRenderLayout = () => {
        const rendered = !render;
        setRender(rendered);
    }

    return (
        <>
            <>
                <CommentBox __onRenderLayout={__onRenderLayout}/>
            </>
            <>
                <ReadCommentBox render={render}__onRenderLayout={__onRenderLayout}
                />
            </>
        </>
    )
}