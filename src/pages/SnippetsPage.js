import Counter from "../components/Counter.js";
import RepeatInput from "../components/RepeatInput";
import Hider from "../components/Hider.js";
import ToDoList from "../components/ToDoList.js"

import { Fragment } from "react";
import { NavLink } from "react-router-dom"


function Snippets(){

    return (
    <Fragment>
        <h1>Snippets Page</h1>
        <Counter/>
        <RepeatInput/>
        <Hider/>
        <ToDoList/>
        <NavLink to='/'>Page d'accueil</NavLink>
    </Fragment>
    )
}

export default Snippets;