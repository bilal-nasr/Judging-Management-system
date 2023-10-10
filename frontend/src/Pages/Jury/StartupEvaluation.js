import { React, useState, useEffect } from "react";
import api from "../../api";



export default function StarupEvaluation() {

    const [criterias, setCriterias] = useState([])
    const [dataGot, setDataGot] = useState(false)

    const getCriteria = async () => {
        try {
            const data = await api.get("/evaluation/getAllCriteria");
            setDataGot(true)
            setCriterias(data?.data.criteria)
        } catch (error) {

        }
    }

    useEffect(() => {
        getCriteria()
        console.log(criterias)
        console.log(dataGot)
    }, [dataGot])

    return (
        <div>
            {dataGot && criterias.map(criteria => {
                return(
                    <p>{criteria.description}</p>
                )
            })}
        </div>
    )
}