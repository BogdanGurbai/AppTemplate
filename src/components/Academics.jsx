import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Grades from './data/grades.json'

export default function Academics() {
    const grades = Grades
    const [viewPackage, setViewPackage] = useState(false)
    const [years, setYears] = useState([])
    const [quartiles, setQuartiles] = useState([])
    const [packages, setPackages] = useState([])

    useEffect(() => {
        setYears([...new Set(grades.map(grade => grade.year))])
        setQuartiles([...new Set(grades.map(grade => grade.quarter))])
        const auxPacks = [...new Set(grades.map(grade => grade.package))].sort()
        const auxPackages = []
        for (const auxPack of auxPacks) {
            auxPackages.push({name: auxPack, grades: grades.filter((grade) => grade.package === auxPack && grade.grade > 5)})
        }
        setPackages(auxPackages)
    }, []);

    const showYearView = (
        <table className="table table-primary table-striped table-hover w-100">
            <thead>
                <tr className="border border-primary border-1">
                    <th scope="col"></th>
                    {quartiles.map(quarter => (
                        <th key={quarter} scope="col">Quartile {quarter}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{years.map(year => (
                <tr key={year} className="border border-primary border-1">
                    <th scope="row">Year {year}</th>
                    {quartiles.map(quarter => (
                        <td key={quarter} className="w-auto">{grades.map(grade =>(
                                grade.year === year ? (grade.quarter === quarter ? 
                                <p className="pe-1" key={grade.id}>{grade.name} ({grade.grade})</p> : null) : null
                        ))}</td>
                    ))}
                </tr>
            ))}</tbody>
        </table>
    )

    const showPackageView = (
        <table className="table table-primary table-striped table-hover w-100">
            <thead></thead>
            <tbody>{packages.map(pack => (
                <tr key={pack.name} className="border border-primary border-1">
                    <th scope="row">{pack.name}</th>
                    {quartiles.map(quarter => (
                        <td key={quarter} className="w-auto">
                            {pack.grades.slice(
                                (quarter-1)*(Math.floor(pack.grades.length / quartiles.length)) + quarter - 1, 
                                quarter*(Math.floor(pack.grades.length / quartiles.length)) + quarter
                            ).map(grade =>(<p>{grade.name} ({grade.grade})</p>))}
                        </td>
                    ))}
                </tr>
            ))}</tbody>
        </table>
    )

    return (
        <>
        <div className="d-flex justify-content-center">
            <h1 className="w-auto p-3 text-center fw-bold" style={{color: "#00369c"}}>Academics Tab</h1>
        </div>
        <div className="d-flex justify-content-center">
            <p className="w-75 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis ducimus debitis enim voluptatibus. Possimus aut libero, neque velit beatae similique quisquam aliquid dolore, quidem debitis quia? Itaque, quibusdam corrupti.
            </p>
        </div>
        <div className="d-flex justify-content-center pb-5">
            <div className="w-75 justify-content-center">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary mb-2" onClick={() => setViewPackage(false)}>Year View</button>
                    <button className="btn btn-outline-primary mb-2" onClick={() => setViewPackage(true)}>Package View</button>
                </div>
                {!viewPackage && showYearView}
                {viewPackage && showPackageView}
            </div>
        </div>
        </>
    )
}