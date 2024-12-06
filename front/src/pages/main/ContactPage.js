import { useState } from "react";
import axios from 'axios';

const ContactPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main>
            <form action="/contact" method="post" onSubmit={handleSubmit} className="formulario">
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </div>
                <div>
                    <label for="email">Mail:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label for="telefono">Telefono:</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </div>
                <div>
                    <label for="mensaje">Mensaje:</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
            {sending ? <p>Enviando.....</p> : null}
            {msg ? <p>{msg}</p> : null}
        </main>
    )
}

export default ContactPage;