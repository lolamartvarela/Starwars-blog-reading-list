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
            <Link to="/"><span className="btn btn-primary btn-lg" href="#" role="button">Back home</span>
            </Link>
        </div>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
