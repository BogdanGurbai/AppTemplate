import React from "react"
import { Carousel } from 'react-bootstrap';

import Placeholder from './assets/appTemplateAssets/placeholder.png'

export default function Project1() {

    return (
    <div className="container w-100">  
        {/*heading*/}
        <div className="d-flex justify-content-center">
            <h1 className="w-auto p-3 text-center fw-bold" style={{color: "#00369c"}}>Project 1</h1>
        </div>
        <div className="d-flex justify-content-center w-100">
            <p className="text-center w-75">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque voluptatem error rerum corrupti, consequuntur nostrum. Voluptas laboriosam nisi facilis saepe quas commodi dicta consectetur enim, quae ipsum animi mollitia!
            </p>
        </div>
        {/*the project*/}
        <div className="d-flex justify-content-center">
            <h3 className="d-flex w-auto text-center fw-bold" style={{color: "#00369c"}}>Lorem</h3>
        </div>
        <div className="d-flex justify-content-center mb-3">
            <div className="d-flex justify-content-around w-75">
                <p className="fs-5 fw-light w-50 text-right py-4 pe-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit accusamus similique soluta, itaque laboriosam? Eius ad in commodi illo, asperiores voluptates ratione, modi magnam sunt quos ipsa consequatur iusto?
                </p>
                <Carousel className="w-50 py-4">
                    <Carousel.Item>
                        <img src={Placeholder} className="w-100"/>
                        <Carousel.Caption>
                            <h3 className="text-center fw-bold">Lorem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Placeholder} className="w-100"/>
                        <Carousel.Caption>
                            <h3 className="text-center fw-bold">Lorem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Placeholder} className="w-100"/>
                        <Carousel.Caption>
                            <h3 className="text-center fw-bold">Lorem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Placeholder} className="w-100"/>
                        <Carousel.Caption>
                            <h3 className="text-center fw-bold">Lorem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Placeholder} className="w-100"/>
                        <Carousel.Caption>
                            <h3 className="text-center fw-bold">Lorem</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
            <div className="d-flex justify-content-around w-75">
                <img src={Placeholder} className="w-25"/>
                <p className="fs-5 fw-light w-75 text-end py-4 ps-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa doloribus expedita, officiis amet ab perferendis vitae praesentium odit assumenda quos atque, minus cum error tempora vel placeat architecto natus!
                </p>
            </div>
        </div>
    </div>
    )
}