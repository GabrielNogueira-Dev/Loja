import { Link } from "react-router-dom"

export function Notfound(){
    return(
        <div>
            <h1>Error</h1>
            <Link to="/">Acesse o Home</Link>
        </div>
    )
}