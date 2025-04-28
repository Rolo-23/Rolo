// frontend/src/components/PersonaForm.js
import React, { useState } from 'react';

const PersonaForm = ({ onSubmit, initialData }) => {
    const [persona, setPersona] = useState(initialData || { Nombre: '', Apellido: '', Email: '', Telefono: '' });

    const handleChange = (e) => {
        setPersona({ ...persona, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(persona);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Nombre" placeholder="Nombre" value={persona.Nombre} onChange={handleChange} required />
            <input type="text" name="Apellido" placeholder="Apellido" value={persona.Apellido} onChange={handleChange} required />
            <input type="email" name="Email" placeholder="Email" value={persona.Email} onChange={handleChange} required />
            <input type="text" name="Telefono" placeholder="Teléfono" value={persona.Telefono} onChange={handleChange} />
            <button type="submit">{initialData ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default PersonaForm;