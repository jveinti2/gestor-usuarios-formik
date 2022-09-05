import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import { toast } from 'wc-toast'


const Formulario = ({ submit }) => {


    const handleCloseToast = () => {
        toast('🆗 Registrado', { theme: { type: 'dark' } });
    }


    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        apellido: '',
        email: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return (

        <form onSubmit={handleSubmit}>
            <wc-toast></wc-toast>
            <article>
                <header>Formulario</header>
                <div className='grid'>
                    <div>
                        <Input required label="Nombre" name='name' value={formulario.name} onChange={handleChange} />
                    </div>
                    <div>
                        <Input required label="Apellido" name='apellido' value={formulario.apellido} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <Input required label="Email" name='email' value={formulario.email} onChange={handleChange} />
                </div>
                <footer>
                    <button onClick={handleCloseToast} className='toast-dark' >Registrar</button>
                </footer>
            </article>
        </form>

    )
}

export default Formulario