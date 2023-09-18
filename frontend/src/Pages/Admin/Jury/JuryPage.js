import React from "react";
import addJudge from "../addJudge";
import tableDataViewer from "../tableDataViewer"
import api from "../../../api";

export default function JuryPage() {


    const getJuries = async () => {

        try {
            const data = api.post("/getAllJuries")

        } catch (err) {

        }
    }
    return (
        <>
            <addJudge />
            <br />
            <tableDataViewer />
        </>
    )
}