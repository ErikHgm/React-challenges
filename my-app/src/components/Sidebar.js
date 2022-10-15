import React from "react";
import css from "./css/Sidebar.module.css"

function Sidebar() {
    return <div className={css.sidebar} >
        <a>MyPhotos</a>
        <a>MyIllustrations</a>
        <a>MyPaintings</a></div>

}

export default Sidebar;