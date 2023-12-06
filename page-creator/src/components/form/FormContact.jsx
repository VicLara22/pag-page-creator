import React, { useRef, useState } from 'react'
import Validation from './Validation';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './formContact.css';

function FormContact() {
    const form = useRef();

    const [value, setValue] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        asunto: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        asunto: '',
        message: ''
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });

        setErrors(Validation(value));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_wf3sqpe',
                'template_emkjedj',
                form.current,
                '2de5dh3wcuxLsnH3u'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        Swal.fire({
            text: "Mensaje enviado",
            icon: "success",
            iconColor: "rgb(62, 138, 62)",
            showCloseButton: true,
            allowEnterKey: false,

        }).then((result) => {
            if (result.isConfirmed) {
                setValue({
                    name: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    location: '',
                    asunto: '',
                    message: ''
                });
            }
        });
    };

    return (
        <section className='sectionFormContact'>
            <div className="container-contacto-title">
                <h1 className='container-contacto-h1'>CONTACTANOS</h1>
            </div>
            <form onSubmit={onSubmit}
                ref={form}
            >
                <div className="column">
                    <label>Nombre <span>*</span></label>
                    <input
                        type='text'
                        name='name'
                        value={value.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su nombre..."
                        className={`${errors.name ? 'error' : ''} ${'inputField'}`}
                    />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}

                    <label>Apellido <span>*</span></label>
                    <input
                        type='text'
                        name='lastName'
                        value={value.lastName}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su apellido..."
                        className={`${errors.lastName ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.lastName && (
                        <p className={'error'}>{errors.lastName}</p>
                    )}
                    <label>Télefono <span>*</span></label>
                    <input
                        type='number'
                        name='phone'
                        value={value.phone}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su télefono..."
                        className={`${errors.phone ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.phone && (
                        <p className={'error'}>{errors.phone}</p>
                    )}
                    <label>Correo electrónico <span>*</span></label>
                    <input
                        type='email'
                        name='email'
                        value={value.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su email..."
                        className={`${errors.email ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.email && (
                        <p className={'error'}>{errors.email}</p>
                    )}
                </div>
                <div className="column">
                    <label>Localidad <span>*</span></label>
                    <input
                        type='text'
                        name='location'
                        value={value.location}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su localidad..."
                        className={`${errors.location ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.location && (
                        <p className='error'>{errors.location}</p>
                    )}
                    <label>Asunto <span>*</span></label>
                    <input
                        type='text'
                        name='asunto'
                        value={value.asunto}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese un asunto..."
                        className={`${errors.asunto ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.asunto && (
                        <p className='error'>{errors.asunto}</p>
                    )}
                    <label>Mensaje <span>*</span></label>
                    <textarea
                        name='message'
                        value={value.message}
                        onChange={(e) => handleChange(e)}
                        placeholder="Ingrese su mensaje..."
                        className={`${errors.message ? 'error' : ''} ${'inputField'}`}

                    />
                    {errors.message && (
                        <p className='error'>{errors.message}</p>
                    )}
                </div>
                <div className='btnEnviar'>
                    <button
                        type='submit'
                        disabled={errors.name || errors.lastName || errors.phone || errors.email || errors.message || errors.location || errors.asunto === "" ? true : false}
                    >ENVIAR</button>
                </div>
            </form>
        </section>
    )
}

export default FormContact;