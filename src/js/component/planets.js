import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const Planets = (nombre, terreno, id) => {
    const {actions} = useContext(Context)

      return (

    <div className="card-group row">
    <div className="card mx-4 my-2" style= {{width:"18rem"}}>
    <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id)+".jpg"} 
    className="card-img-top mt-2" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Population: {props.poblacion}</p>
        <p className="card-text">Terrain: {terreno}</p>
            <Link to={"/singleplanet/"+ id} className="btn btn-primary">Learn More</Link>
            <button className="fa fa-heart btn ms-5 text-dark border border-danger" onClick={() => actions.agregarFavorito(nombrePlaneta)}></button>

        </div>
    </div>
    </div>

	);
};