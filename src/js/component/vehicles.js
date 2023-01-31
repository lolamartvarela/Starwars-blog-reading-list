import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const Vehicles = (nombre, modelo, id) => {
    const {actions} = useContext (Context)

      return (

    <div className="card-group row">
    <div className="card mx-4 my-2" style= {{width:"18rem"}}>
    <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(id)+".jpg"} 
    className="card-img-top mt-2" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Model: {modelo}</p>
        {/* <p className="card-text">Manufacturer: {manufacturer}</p> */}
            <Link to={"/singlevehicle/"+ id} className="btn btn-primary">Learn More</Link>
            <button className="fa fa-heart btn ms-5 text-dark border border-danger" onClick={() => actions.agregarFavorito(nombre)}></button>
        </div>
    </div>
    </div>

	);
};
