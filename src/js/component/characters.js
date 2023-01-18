import React from "react";
import {Link} from "react-router-dom";

export const Characters = (props) => {
    console.log(props);

    return (
        <div className="card-group row">
        <div className="card mx-4 my-2" style= {{width:"18rem"}}>
        <img src="https://isccoquimbo.cl/images/400X200.gif" className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Gender: {props.genero}</p>
                <p className="card-text">Hair color: {props.pelo}</p>
                <p className="card-text">Eye color: {props.ojos}</p>
                <Link to={"/single/"+ props.id} className="btn btn-primary">Learn More</Link>
                <a href="#" className="btn btn-warning ms-5 text-dark bg-warning ">♡</a>
            </div>
        </div>
        </div>
    )
}
