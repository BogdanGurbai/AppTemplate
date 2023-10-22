import React from "react";
import { Link } from "react-router-dom";

import Placeholder from './assets/appTemplateAssets/placeholder.png'

export default function Projects() {
    return (
    <>
        <div className="d-flex justify-content-center">
                <h1 className="w-auto p-3 text-center fw-bold" style={{color: "#00369c"}}>Projects Tab</h1>
        </div>
        <div className="d-flex justify-content-center">
            <p className="w-75 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam sequi deleniti ad quibusdam architecto, odio quas. Dolore veniam error nesciunt suscipit eum fugiat odio veritatis eligendi repellat cupiditate. Dolor!
            </p>
        </div>
        <div className="d-flex justify-content-center pb-5 px-3">
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"300px"}}/>
                <div className="card-body">
                    <div className="d-flex justify-content-start">
                        <h4 className="col-7 card-title" style={{color: "#00369c"}}>Lorem</h4> 
                        <Link to="/AppTemplate/projects/project1" className="col-5 btn btn-outline-primary">View More</Link>
                    </div>
                    <p className="card-text mt-2" style={{width:"270px"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ullam vero odit corporis delectus! Unde, nobis vitae necessitatibus itaque sed at. Iure, corrupti similique reprehenderit architecto suscipit doloremque dolorem soluta.
                    </p>
                </div>
            </div>
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"300px"}}/>
                <div className="card-body">
                    <div className="d-flex justify-content-start">
                        <h4 className="col-7 card-title" style={{color: "#00369c"}}>Lorem</h4> 
                        <Link to="/AppTemplate/projects/project2" className="col-5 btn btn-outline-primary">View More</Link>
                    </div>
                    <p className="card-text mt-2" style={{width:"270px"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora atque corporis, aperiam soluta nam voluptatibus quaerat alias sapiente cupiditate nemo fugit numquam! Unde itaque obcaecati, id omnis rerum nisi voluptatum.
                    </p>
                </div>
            </div>
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"300px"}}/>
                <div className="card-body">
                    <div className="d-flex justify-content-start">
                        <h4 className="col-7 card-title" style={{color: "#00369c"}}>AppTemplate</h4> 
                        <Link to="/AppTemplate/" className="col-5 btn btn-outline-primary">View More</Link>
                    </div>
                    <p className="card-text mt-2" style={{width:"270px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis enim sapiente porro, corporis sit eaque aliquam asperiores voluptatibus voluptate, qui optio omnis placeat quidem. Illo vel eos neque. Rem?
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}