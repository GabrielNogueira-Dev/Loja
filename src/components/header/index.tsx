import './header.css'
import { Link } from "react-router-dom"


export function Header(){
    return(
        <header>
<div className='blog'>
    <h2>Blog</h2>
</div>

        <div className="homesobre">
<Link to= "/">Home</Link>
<Link to="/sobre">Sobre</Link>
        </div>
        </header>
    )
}