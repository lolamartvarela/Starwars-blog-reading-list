import React from "react";
import {Link} from "react-router-dom";

export const Characters = (props) => {
    console.log(props);

    return (
        <div className="card-group row">
        <div className="card mx-4 my-2" style= {{width:"18rem"}}>
        <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.id + ".jpg"} 
        className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Gender: {props.genero}</p>
                <p className="card-text">Hair color: {props.pelo}</p>
                <p className="card-text">Eye color: {props.ojos}</p>
                <Link to={"/single/"+ props.id} className="btn btn-primary">Learn More</Link>
                <a href="#" className="fa fa-heart btn ms-5 text-dark border border-danger"></a>
            </div>
        </div>
        </div>
    )
}
