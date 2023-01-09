import React, {useState} from "react";
import {Link} from "react-router-dom";

import Editor from "./EditorComponent";

const BoardWrite = () => {
    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    return (
        <div className={"container mt-3"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label htmlFor="title">제목</label>
                    <input type="text" className={"form-control my-2"} id={"title"}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <label htmlFor="content">내용</label>
                    <Editor value={desc} onChange={onEditorChange} />
                </div>
            </div>
            <div className={"d-flex justify-content-end mt-4"}>
                <Link to={"/board"}>
                    <button type={"button"} className={"btn btn-outline-dark px-1 py-0"}>작성하기</button>
                </Link>
            </div>
        </div>
    );
}

export default BoardWrite;