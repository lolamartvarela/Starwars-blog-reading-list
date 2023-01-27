import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import {Characters} from "../component/characters.js";
import {Planets} from "../component/planets.js"
import {Vehicles} from "../component/vehicles.js"
import { Context } from "../store/appContext.js";

export const Home = () => {
    const {store} = useContext (Context)
    console.log(store.personajes);
    console.log(store.planetas);
    console.log(store.vehiculos);


	return (
	<>
    <div>
	<div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Characters</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.personajes.map((item, index)=><Characters key={index} id={index +1} nombre={item.name} genero={item.gender} pelo={item.hair_color} ojos={item.eye_color}/>)}
	</div>
    </div>

    <div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Planets</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.planetas.map((item, index)=><Planets key={index} id={index +1} nombreplaneta={item.name} poblacion={item.population
} terreno={item.terrain} clima={item.climate} Orbitalperiod={item.orbital_period}  Rotationperiod={item.rotation_period} Diameter={item.diameter}/>)}
	</div>
    </div>

    <div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Vehicles</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.vehiculos.map((item, index)=><Vehicles key={index} id={index} modelovehiculo={item.model} manufactura={item.manufacturer} clase={item.class} costo={item.cost} velocidad={item.speed}  largo={item.length} carga={item.cargo_capacity} tripulacion={item.mimimum_crew} pasajeros={item.passengers}/>)}
	</div>
    </div>
    </div>
	</>
    )
}

