import React, { useState } from 'react';
import '../styles/services.css';

const Services = () => {
    const servicios = [
        {
            id: 1,
            titulo: "MarketPlace Freelance",
            imagen: 'https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg',
            detalles: "Coresys specializes in developing tailored administrative systems designed to meet the unique needs of businesses.",
        },
        {
            id: 2,
            titulo: "MarketPlace Freelance",
            imagen: 'https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg',
            detalles: "New Iguanas House is a leading hospitality company offering exceptional services and accommodations to its guests.",
        },
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    const verDetalles = (servicio) => {
        setServicioSeleccionado(servicio);
    };

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="tarjetas-container">
                {servicios.map((servicio) => (
                    <div key={servicio.id} className="tarjeta">
                        <img src={servicio.imagen} alt={servicio.titulo} className="imagen-tarjeta" />
                        <h3>{servicio.titulo}</h3>
                        <p>{servicio.descripcion}</p>
                        <button onClick={() => verDetalles(servicio)}>View Details</button>
                    </div>
                ))}
            </div>

            {servicioSeleccionado && (
                <div className="detalle">
                    <h2>{servicioSeleccionado.titulo}</h2>
                    <img src={servicioSeleccionado.imagen} alt={servicioSeleccionado.titulo} className="imagen-detalle" />
                    <p><strong>Description:</strong> {servicioSeleccionado.descripcion}</p>
                    <p><strong>Details:</strong> {servicioSeleccionado.detalles}</p>
                    <button onClick={() => setServicioSeleccionado(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Services;
