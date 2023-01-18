import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pluspng.com/img-png/png-star-wars-star-wars-icon-png-50-px-1600.png"  width="50"
                                  height="50" alt="" /></span>
			</Link>

			<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-primary tx-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favorites
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
		</nav>
		</div>
	);
};
