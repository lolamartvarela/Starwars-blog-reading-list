import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlevehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

  
    useEffect(() => {
    actions.obtenerDetalleVehiculo(params.theid);
    }, []);

    return (
      <>
        <div className="container mt-2 mb-2">
          <div className="jumbotron">
            
          <div className="d-flex flex-row">
       <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/vehicles/"+ (params.theid) + ".jpg"}    alt="Card image cap"></img>
      <div className="card-body">
        <h1 className="mx-4 mb-2 card-title text-center">{store.obtenerDetalleVehiculo.name}</h1>
        <p className="mx-4 card-text text-center">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inci dunt, ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
     </div>
  
           <hr className="my-4 text-danger"/> 
         
          <div className="container d-flex justify-content-between strong text-danger">
            <h6 className="col-3">Model</h6>
            <h6 className="col-3">Manufacturer</h6>
            <h6 className="col-3">Class</h6>
            <h6 className="col-3">Cost</h6>
            <h6 className="col-3">Speed</h6>
            <h6 className="col-3">Length</h6>
            <h6 className="col-3">Cargo Capacity</h6>
            <h6 className="col-3">Mimimum Crew</h6>
            <h6 className="col-3">Passengers</h6>
          </div>
          <div className="mb-5 container d-flex justify-content-between font-weight-light text-danger">
            <h6 className="col-3">{store.obtenerDetalleVehiculo.model}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.manufacturer}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.class}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.cost}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.speed}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.length}</h6>
            <h6 className="col-3">{store.obtenerDetalleVehiculo.cargo_capacity}</h6> 
            <h6 className="col-3">{store.obtenerDetalleVehiculo.mimimum_crew}</h6> 
            <h6 className="col-3">{store.obtenerDetalleVehiculo.passengers}</h6>  
          </div>
          <Link to="/"><span className="btn btn-primary btn-lg" href="#" role="button">Back home</span>
            </Link>
            </div>
        </div>
        
        
        
      </>
    );
  };
  Singlevehicles.propTypes = {
    match: PropTypes.object,
  };
  