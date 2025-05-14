
import { useParams } from "react-router-dom";

export function Produto(){
    const {id} = useParams()

    return(
        
        <div>
<h1> bem vindo {id}</h1>
        </div>
    )
}
