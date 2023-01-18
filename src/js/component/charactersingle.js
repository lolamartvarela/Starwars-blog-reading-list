import React from "react";
import {Link} from "react-router-dom"; 

    export const Charactersingle = (props) => {
    console.log(props)

    return (
        <div className="d-flex flex-row">
      <img className="card-img-top" src="https://isccoquimbo.cl/images/400X200.gif" alt="Card image cap"></img>
      <div className="card-body">
        <h1 className="mx-4 mb-2 card-title text-center">{props.nombre}</h1>
        <p className="mx-4 card-text text-center">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inci dunt, ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>
    
    )
    }

