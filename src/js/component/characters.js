import React, { useState, useEffect, useContext } from "react"
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const Characters = (nombre, genero, id) => {
    const {actions} = useContext(Context)

    return (
        <div className="card-group row">
        <div className="card mx-4 my-2" style= {{width:"18rem"}}>
        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id) + ".jpg"} 
        className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Gender: {genero}</p>
                <p className="card-text">Hair color: {pelo}</p>
                <p className="card-text">Eye color: {ojos}</p>
                <Link to={"/single/"+ id} className="btn btn-primary">Learn More{id}</Link>
                <button className="fa fa-heart btn ms-5 text-dark border border-danger" onClick={() => actions.agregarFavorito(nombrePersonaje)}></button>

                
            </div>
        </div>
        </div>
    )
}


