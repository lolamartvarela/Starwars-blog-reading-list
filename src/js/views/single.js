import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Charactersingle } from "../component/charactersingle";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [detallePersonaje, setDetallePersonaje]=useState({})
	const params = useParams();
	console.log(params)
                                                    
	function infoPersonajes(){       
		fetch("https://swapi.dev/api/people/"+params.theid)   
	   .then(res => res.json())
	   .then(data => setDetallePersonaje(data))
	   .catch(err => console.error(err))
	} 
	console.log(detallePersonaje);  
	console.log(detallePersonaje.name)
	
  useEffect(() => {
	infoPersonajes();
  }, [])

    return (
        <div className="container mt-2 mb-2 ">
        <div className="jumbotron">
			<Charactersingle nombre={detallePersonaje.name}/>
            <hr className="my-4 text-danger" />

		<div className="container d-flex justify-content-between strong text-danger">
        <p className="col-3">Name</p>
        <p className="col-3">Birth Year</p>
        <p className="col-3">Gender</p>
        <p className="col-3">Height</p>
        <p className="col-3">Skin Color</p>
        <p className="col-3">Eye color</p>
      </div>
	  <div className="mb-5 container d-flex justify-content-between font-weight-light text-danger">
        <p className="col-3">{detallePersonaje.name}</p>
        <p className="col-3">{detallePersonaje.birth_year}</p>
        <p className="col-3">{detallePersonaje.gender}</p>
        <p className="col-3">{detallePersonaje.height}</p>
        <p className="col-3">{detallePersonaje.skin_color}</p>
        <p className="col-3">{detallePersonaje.eye_color}</p>
      </div>

            <Link to="/"><span className="btn btn-primary btn-lg" href="#" role="button">Back home</span>
            </Link>
        </div>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
