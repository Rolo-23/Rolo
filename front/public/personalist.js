// frontend/src/components/PersonaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonaForm from './PersonaForm';

const PersonaList = () => {
    const [personas, setPersonas] = useState([]);
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchPersonas();
    }, []);

    const fetchPersonas = async () => {
        const response = await axios.get('http://localhost:5000/personas');
        setPersonas(response.data);
    };

    const handleCreateOrUpdate = async (data) => {
        if (editing) {
            await axios.put(`http://localhost:5000/personas/${editing.Id}`, data);
            setEditing(null);
        } else {
            await axios.post('http://localhost:5000/personas', data);
        }
        fetchPersonas();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/personas/${id}`);
        fetchPersonas();
    };

    return (
        <div>
            <h1>Lista de Personas</h1>
            <PersonaForm onSubmit={handleCreateOrUpdate} initialData={editing} />
            <ul>
                {personas.map((p) => (
                    <li key={p.Id}>
                        {p.Nombre} {p.Apellido} - {p.Email} - {p.Telefono}
                        <button onClick={() => setEditing(p)}>Editar</button>
                        <button onClick={() => handleDelete(p.Id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonaList;