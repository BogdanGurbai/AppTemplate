import React from "react";

import Placehoder from './assets/appTemplateAssets/placeholder.png'

export default function Home() {
    return (
        <>
        <div className="d-flex justify-content-center">
            <h1 className="w-auto pt-4 text-center fw-bold" style={{color: "#00369c"}}>Home Page</h1>
        </div>
        <div className="d-flex justify-content-center mb-5">
            <p className="text-center w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid quam quasi quibusdam aspernatur repellendus sed molestiae, unde quidem nisi deleniti ducimus, id quod dolore sapiente minima eius, pariatur illum?
            </p>
        </div>
        <div className="d-flex justify-content-center mb-3">
            <div className="d-flex justify-content-around w-75">
                <p className="fs-5 fw-light w-75 text-right py-4 pe-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque repellat excepturi est nam aspernatur sunt neque a tempora dicta dolorem, ducimus aliquam deleniti libero sequi officia eum commodi impedit exercitationem!
                </p>
                <img src={Placehoder} className="w-25"/>
            </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
            <div className="d-flex justify-content-around w-75">
                <img src={Placehoder} className="w-25"/>
                <p className="fs-5 fw-light w-75 text-end py-4 ps-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aperiam amet consequatur eum quasi eos pariatur repellendus. Non doloremque explicabo, perferendis culpa ea id, consequatur ratione assumenda debitis earum voluptates.
                </p>
            </div>
        </div>
        </>
    )
}