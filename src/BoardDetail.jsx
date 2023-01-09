import React, {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";

function BoardDetail({title, contents}) {
    const {boardIdx} = useParams();
    // console.log(boardIdx);

    return (
        <div className={"container mt-3"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label htmlFor="title">제목</label>
                    <input type="text" className={"form-control my-2"} id={"title"} value={title}/>
                    <p>{title}</p>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <label htmlFor="content">내용</label>
                    <textarea id="content" className={"form-control my-2"} rows="7">{contents}</textarea>
                </div>
            </div>
            <div className={"d-flex mt-4"}>
                <Link to={"/board"}>
                    <button type={"button"} className={"btn btn-outline-dark px-1 py-0"}>목록으로</button>
                </Link>
            </div>
        </div>
    );
}

export default BoardDetail;