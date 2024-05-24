import { NavLink } from "react-router-dom"
import '../style/linkpage.css'

function LinksPage(){
return  <div className="links__div">
            <h1 className="links__title">Page d'accueil</h1>
            <NavLink to='/snippets'>Page Snippet</NavLink>
            <NavLink to='/table'>Page tableau</NavLink>
        </div>
}
export default LinksPage;