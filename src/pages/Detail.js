import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Detail() {
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/tuors/${id}`).then((response) => {
            const detail = response.data;
            console.log(detail);
        });
    }, []);

    return (
        <>
            <h1>Chi Tiết Tour</h1>

            <table border={'1px'}>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>{state.detail.id}</td>
                    <td>{state.detail.title}</td>
                    <td>{state.detail.price}</td>
                    <td>{state.detail.description}</td>
                </tr>

            </table>
            <Link to={"/"}><button>Black</button></Link>
        </>
    );
}