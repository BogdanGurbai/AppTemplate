import React from "react";
import Placeholder from './assets/appTemplateAssets/placeholder.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light shadow border-bottom border-primary p-2">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex" to="/AppTemplate/">
                    <img src={Placeholder} alt="" width="40" height="40" className="d-inline-block align-text-mid p-1"/> 
                    <h2>AppTemplate</h2>
                </Link>
            </div>
            <div className="collapse navbar-collapse d-flex">
                <ul className="navbar-nav">
                    <Link to="/AppTemplate/projects" className="nav-link">Projects Tab</Link>
                    <Link to="/AppTemplate/academics" className="nav-link">Academics Tab</Link>
                    <Link to="/AppTemplate/extra" className="nav-link fw-bold" style={{color: "#00369c"}}>Extra Tab</Link>
                </ul>
            </div>
        </nav>
    )
}