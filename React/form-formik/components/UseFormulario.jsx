import { useFormik } from "formik"

const UseFormulario = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Falta el campo "Nombre"'
            } else if (values.name.length <= 8) {
                errors.name = 'El "Nombre" debe contener 8 o más caracteres'
            }

            if(!values.email){
                errors.email = 'Falta el campo "Email"'
            }else if (values.email.indexOf('@' && '.com') < 1) {
                errors.email = 'El campo "Email" no parece contener un correo electrónico'                
            }
            return errors
        },
        onSubmit: values => console.log(values)
    })

    return (
        <div className="grid">
            <div>
                <form onSubmit={formik.handleSubmit} >
                    <label>Nombre</label>
                    <input
                        type="text" {...formik.getFieldProps('name')}
                    // name="name" 
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                    />

                    <label>Email</label>
                    <input
                        type="email" {...formik.getFieldProps('email')}
                    // name="email"
                    // onChange={formik.handleChange}
                    // value={formik.values.email} 
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div>
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
        </div>
    )

}

export default UseFormulario