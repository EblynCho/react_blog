import React from "react";

function Main(props) {
    return (
        <div className={"row"}>
            <div className={"col-7"}>
                <img src="/img/3.jpg" alt="" className={"w-100"}/>
            </div>
            <div className={"col container ps-5 d-flex align-items-center main_title_text"}>
                <div>
                    <p className={"mb-3"}>Travel Stories,</p>
                    <p>Thoughts & Experiences</p>
                </div>
            </div>
        </div>
    );
}

export default Main;