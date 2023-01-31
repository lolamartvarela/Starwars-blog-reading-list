import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import {Characters} from "../component/characters.js";
import {Planets} from "../component/planets.js"
import {Vehicles} from "../component/vehicles.js"
import { Context } from "../store/appContext.js";

export const Home = () => {
    const {store} = useContext (Context)

	return (
	<>
    <div>
	<div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Characters</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.personajes.map((cadaPersonaje, index)=><Characters key={index} id={index +1} nombre={cadaPersonaje.name} genero={cadaPersonaje.gender} pelo={cadaPersonaje.hair_color} ojos={cadaPersonaje.eye_color}/>)}
	</div>
    </div>

    <div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Planets</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.planetas.map((cadaPlaneta, index)=><Planets key={index} id={index +1} nombreplaneta={cadaPlaneta.name} poblacion={cadaPlaneta.population
} terreno={cadaPlaneta.terrain} clima={cadaPlaneta.climate} Orbitalperiod={cadaPlaneta.orbital_period}  Rotationperiod={cadaPlaneta.rotation_period} Diameter={cadaPlaneta.diameter}/>)}
	</div>
    </div>

    <div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Vehicles</h1></div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.vehiculos.map((cadaVehiculo, index)=><Vehicles key={index} id={index} modelovehiculo={cadaVehiculo.model} manufactura={cadaVehiculo.manufacturer} clase={cadaVehiculo.class} costo={cadaVehiculo.cost} velocidad={cadaVehiculo.speed}  largo={cadaVehiculo.length} carga={cadaVehiculo.cargo_capacity} tripulacion={cadaVehiculo.mimimum_crew} pasajeros={cadaVehiculo.passengers}/>)}
	</div>
    </div>
    </div>
	</>
    )
}

