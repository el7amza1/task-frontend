import { Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useRef, useState } from 'react'

interface Values {
    username: string;
    password: string;
}

function FormLogin() {

    return (
        <div className='formikRaber'>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className='formLogin'>
                    {/* username  input*/}
                    <label htmlFor="username" className='lbl'>username</label>
                    <Field className="input" id="username" name="username" placeholder="your username" />
                    {/* password input */}
                    <label htmlFor="password" className='lbl'>password</label>
                    <Field className="input" id="password" name="password" placeholder="your password" />
                    {/* button */}
                    <button className="btn" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormLogin
