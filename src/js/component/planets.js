import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

 export const Planets = () => {
	return (

<div className="card-group row">

<div className="card mx-4" style={{width: "18rem"}}>
  <img src="https://static.vecteezy.com/system/resources/previews/007/613/266/non_2x/poor-cat-tired-free-photo.jpg" className="card-img-top mt-2" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">unsueño</p>
    <Link to="/viewplanets">
    <a href="#" className="btn btn-primary">
      Learn More
      </a>
      </Link>
      <a href="#" className="btn btn-warning ms-5 text-dark bg-warning ">♡</a>
  </div>
</div>
</div>

	);
};