import { ErrorMessage, Field, Formik, Form } from "formik"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import TextInput from '../components/TextInput'


const notify = () => toast.success('Agregado');

const ComponentFormik = () => {
    const [btn, setBtn] = useState(false)
    const [usuario, setUsuario] = useState([])

    return (
        <Formik
            initialValues={{ name: '', email: '', edad: '' }}
            validate={values => {
                const errors = {}
                if (!values.name) {
                    errors.name = 'Falta el campo "Nombre"'
                } else if (values.name.length <= 8) {
                    errors.name = 'El "Nombre" debe contener 8 o más caracteres'
                }
                if (!values.email) {
                    errors.email = 'Falta el campo "Email"'
                } else if (values.email.indexOf('@' && '.com') < 1) {
                    errors.email = 'El campo "Email" no parece contener un correo electrónico'
                }
                !errors.name && !errors.email
                    ? setBtn(true)
                    : setBtn(false)

                return errors
            }}
            onSubmit={(value, { resetForm }) => {
                setUsuario([...usuario, value])
                resetForm({ value: '' })
            }}

        >
            <div className="grid">
                <div>
                    <article>
                        <header>
                            Formulario
                        </header>
                        <Form>
                            <TextInput name='name' label='Nombre' />
                            {/* <label>Email</label>
                            <Field name='email' type="email" /> */}

                            <TextInput name='email' label='Email' />


                            <label>Edad</label>
                            <Field as="select" name='edad' type="email">
                                <option>Seleccione</option>
                                <option>Menos de 18</option>
                                <option>Entre 18 y 30</option>
                                <option>Entre 30 y 50</option>
                                <option>Más de 50</option>
                            </Field>
                            <footer>
                                <button type="submit" disabled={!btn} onClick={notify} >Enviar</button>
                            </footer>
                            <Toaster />
                        </Form>
                    </article>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        {usuario.map(x =>
                            <li>{
                                `Nombre: ${x.name}
                                Email: ${x.email}
                                Edad: ${x.edad}`
                            }
                            </li>)}
                        {/* <ErrorMessage name="email" /> */}
                    </div>
                </div>
            </div>

        </Formik>
    )

}

export default ComponentFormik