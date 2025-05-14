
import { Link } from "react-router-dom"

export function Sobre(){
    return(
        <div>
            <h1>Pagina sobre</h1>
             <Link to="/">home</Link><br />
             <Link to="/sobre">Sobre</Link>
        </div>
    )
}