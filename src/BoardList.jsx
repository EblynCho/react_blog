import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import BoardDetail from "./BoardDetail";

const boardItemList = [
    {idx: 1, boardTitle: "여행지1", boardContent: "조아욥", boardImage: "/img/5.jpg"},
    {idx: 2, boardTitle: "여행지2", boardContent: "good", boardImage: "/img/2.jpg"},
    {idx: 3, boardTitle: "여행지3", boardContent: "perfect!", boardImage: "/img/3.jpg"},
    {idx: 4, boardTitle: "여행지4", boardContent: "soso", boardImage: "/img/4.jpg"}
]

function BoardList(props) {
    return (
        <div>
            <div className={"container"}>
                <div className={"row mt-5"}>

                        {boardItemList.map(
                            (item) => {
                                return (
                                    <div className={"col"}>
                                        {/*<BoardDetail key={item.idx} title={item.boardTitle}>*/}
                                        {/*    <Link to={`/boardDetail/${item.idx}`} key={item.idx} title={item.boardTitle} contents={item.boardContent}>*/}
                                            <Link
                                                to={{
                                                    pathname: `/boardDetail/${item.idx}`,
                                                    state: {
                                                        key:item.idx,
                                                        title:item.boardTitle,
                                                        contents:item.boardContent,
                                                    },
                                                }} >
                                                <img src={item.boardImage} alt="" className={"w-100"} />
                                            </Link>
                                        {/*</BoardDetail>*/}
                                    </div>
                                );
                            }
                        )}

                </div>
                <div className={"d-flex justify-content-end mt-4"}>
                    <Link to={"/boardWrite"}>
                        <button type={"button"} className={"btn btn-dark px-1 py-0"}>글쓰기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BoardList;