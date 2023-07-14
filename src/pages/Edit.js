import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [initialValues, setInitialValues] = useState({
        id: '',
        title: '',
        price: '',
        description: ''
    });
    useEffect(() => {
        axios.get(`http://localhost:3001/tuors/${id}`).then(res => {
            setInitialValues(res.data)
        })
    }, []);


    return (

        <>
            <h1>Sửa Tour</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => {
                    axios.put(`http://localhost:3001/tuors/${id}`, value).then(() => {
                        navigate('/')
                    })
                }}
                enableReinitialize={true}
            >
                <Form>

                    <Field type="hidden" name="id"/>
                    <div>
                        <label htmlFor="title">Name:</label>
                        <Field name={'title'}></Field>
                    </div>
                    <div>
                        <label htmlFor="price">Age:</label>
                        <Field name={'price'}></Field>
                    </div>
                    <div>
                        <label htmlFor="description">Email:</label>
                        <Field name={'description'}></Field>
                    </div>
                    <button>Save</button>
                </Form>
            </Formik>

            <Link to={"/"}><button>Black</button></Link>
        </>

    );

}

