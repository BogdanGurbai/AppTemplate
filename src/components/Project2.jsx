import React from "react"

import Placeholder from './assets/appTemplateAssets/placeholder.png'

export default function Project2() {

    return (
    <div className="container w-100">  
        {/*heading*/}
        <div className="d-flex justify-content-center">
            <h1 className="w-auto p-3 text-center fw-bold" style={{color: "#00369c"}}>Project 2</h1>
        </div>
        <div className="d-flex justify-content-center w-100">
            <p className="text-center w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia veniam culpa quisquam facilis pariatur nisi eligendi similique reiciendis a dolorum, harum consequatur voluptas! Sequi numquam est facere optio reprehenderit.
            </p>
        </div>

        {/*features*/}
        <div className="d-flex justify-content-center">
            <h3 className="d-flex w-auto text-center fw-bold" style={{color: "#00369c"}}>Lorem</h3>
        </div>

        <div className="row justify-content-center px-3">
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"285px"}}/>
                <div className="card-body">
                    <div className="row justify-content-start">
                        <h4 className="card-title" style={{color: "#00369c"}}>Lorem</h4>
                    </div>
                    <p className="card-text" style={{width:"270px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam harum et cupiditate debitis eius itaque deserunt cumque. Et consequuntur commodi sequi modi omnis saepe, iusto qui veniam laboriosam maxime.
                    </p>
                </div>
            </div>
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"285px"}}/>
                <div className="card-body">
                    <div className="row justify-content-start">
                        <h4 className="card-title" style={{color: "#00369c"}}>Lorem</h4>
                    </div>
                    <p className="card-text" style={{width:"270px"}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi consequuntur iure, vitae nisi ducimus magni beatae ratione accusamus sit nam reprehenderit quae, corporis ullam! Suscipit nostrum ab est dolore harum!
                    </p>
                </div>
            </div>
            <div className="card w-auto m-3 p-3 border-3 border-primary shadow">
                <img src={Placeholder} className="card-img img-thumbnail border border-primary" style={{width:"300px", height:"285px"}}/>
                <div className="card-body">
                    <div className="row justify-content-start">
                        <h4 className="card-title" style={{color: "#00369c"}}>Lorem</h4>
                    </div>
                    <p className="card-text" style={{width:"270px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae sit quo debitis quae, ipsam doloremque ut placeat nobis dolor libero officia! Corrupti doloribus neque necessitatibus recusandae illo aliquid laudantium.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}