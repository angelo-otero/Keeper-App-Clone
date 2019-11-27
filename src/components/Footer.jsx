import React from "react";
import ReactDom from "react-dom";

const year = new Date().getFullYear();

function Footer () {
    return (<footer>
        <p>Copyright {year}</p>
    </footer>); 
}

export default Footer;