import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import {Characters} from "../component/characters.js";
import { Context } from "../store/appContext.js";
//import {Planets} from "../component/planets.js";
//import {Vehiculos} from "../component/vehiculos.js";

export const Home = () => {
    const {store} = useContext (Context)
    console.log(store.personajes);
	
//Personajes
	// const [personajes, setPersonajes]= useState([])

	// function obtenerPersonajes() {
    //     fetch("https://swapi.dev/api/people/")
    //     .then(res => res.json())
    //     .then(data => setPersonajes(data.results))
    //     .catch(err => console.error(err))
    // }
	// console.log(personajes);

    
    // useEffect(() => {
    //     obtenerPersonajes();
	// }, [])
	
	// console.log(personajes);

	return (
	<>
	<div>
		<div className="d-flex justify content center mx-5 my-2 overflow-auto">
		{store.personajes.map((item, index)=><Characters key={index} id={index +1} nombre={item.name} genero={item.gender} pelo={item.hair_color} ojos={item.eye_color}/>)}
	</div>
    </div>
	</>
    )
}

/*	//Planetas
	const [planetas, setPlanetas]= useState([])

	function obtenerPlanetas() {
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then(data => setPlanetas(data.results))
        .catch(err => console.error(err))
    }

	//Vehiculos
	const [vehiculos, setVehiculos]= useState([])

	function obtenerVehiculos() {
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then(data => setVehiculos(data.results))
        .catch(err => console.error(err))
    }*/

/*    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Planetas</h1>
    </div>
    <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        <Planets/>
    </div>
    <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger">Vehiculos</h1>
    </div>
    <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        <Vehiculos/>
    </div>
	
	
	    <div className="d-flex justify content center mx-5">
	{personajes.map((item)=><Characters nombre={item.nombre} gender={item.gender}/>)}
        <h1 className="text-danger">Characters</h1></div>
    <div className="d-flex justify content center mx-5 my-2 overflow-auto"></div>*/