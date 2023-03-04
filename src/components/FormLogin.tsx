import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../utils/API';

interface Values {
    userName: string;
    password: string;
}

function FormLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='formikRaber'>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                onSubmit={ async (values)=> {await userLogin(navigate, values, dispatch)}}
                    

                    // setTimeout(async (values: Values) => {
                        
                    //     setSubmitting(false);
                    // }, 500);
                // }}
            >
                <Form className='formLogin'>
                    {/* username  input*/}
                    <label htmlFor="userName" className='lbl'>username</label>
                    <Field className="input" id="userName" name="userName" placeholder="your username" />
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
