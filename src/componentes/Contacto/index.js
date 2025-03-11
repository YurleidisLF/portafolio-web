import React, { useState } from 'react';
import './Contac.css';

function ContacY() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://getform.io/f/alljvwpa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Gracias por tu mensaje. Te respondere pronto :)');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Hubo un problema al enviar el mensaje :( Inténtalo de nuevo.');
            }
        } catch (error) {
            setStatus('Hubo un error al enviar el mensaje :( Inténtalo de nuevo.');
        }
    };

    return (
        <section className="conte_principal">
            <h1 className="titu">Contacto</h1>
            <p className="si-quiere">
                Si quiere contactarme escríbame al correo: yurleidislf@gmail.com. O llene el siguiente formulario :)
            </p>
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                    {status && <p>{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default ContacY;
