import React from "react";
import UnderConstruction from './assets/appTemplateAssets/under_construction.png'

export default function Extra() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="w-auto pt-4 text-center fw-bold" style={{color: "#00369c"}}>Extra</h1>
            </div>
            <div className="d-flex justify-content-center">
                <img src={UnderConstruction} className="w-50" />
            </div>
        </>
    )
}