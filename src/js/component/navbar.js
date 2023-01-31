import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {
    const {store, actions} = useContext(Context)

	return (
        <nav className="navbar navbar-light bg-dark.bg-gradient mx-2 mb-3">
            <Link to="/">
                <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png" className="card-img-top " alt="..."
                    style={
                        {width: "100px"}
                    }/>
            </Link>
            <div className="ml-auto p-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favorites
                    </button>
                    <ul className="dropdown-menu">
                        {
                        store.favoritos.map((item) => (
                            <li key={item}>
                                {item}
                                <button className="btn"
                                    onClick={
                                        () => actions.borrarFavorito(item)
                                }><i className="fas fa-trash-alt"/></button>
                            </li>
                        ))
                    } </ul>
                </div>
            </div>
        </nav>
    );
};
