import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const lights = ['red', 'yellow', 'green']; 

const TrafficLights = () => {

    const [colorEncendido, setColorEncendido] = useState('');
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);

    const changeColor = () => {
        setColorEncendido((prevColor) => {
            const currentIndex = lights.indexOf(prevColor);
            const nextIndex = (currentIndex + 1) % lights.length;
            return lights[nextIndex];
        });
    };

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(changeColor, 3000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isActive]);

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            {/* Estructura del semáforo */}
            <div className="traffic bg-dark p-3 rounded-pill d-flex flex-column align-items-center">

                {/* Luz Roja */}
                <div onClick={() => setColorEncendido('red')}
                    className={`rounded-circle lightred bg-danger ${colorEncendido === 'red' ? ' shadowred' : 'opacity-25'}`}>
                </div>

                {/* Luz Amarilla */}
                <div onClick={() => setColorEncendido('yellow')}
                    className={`rounded-circle lightyellow bg-warning ${colorEncendido === 'yellow' ? 'shadowyellow' : 'opacity-25'}`}>
                </div>

                {/* Luz Verde */}
                <div onClick={() => setColorEncendido('green')}
                    className={`rounded-circle lightgreen bg-success ${colorEncendido === 'green' ? 'shadowgreen' : 'opacity-25'}`}>
                </div>
            </div>
            {/* Boton de encendido */}
            <div className="mt-4 text-center">
                <button className={`btn btn-lg fw-bold px-4 ${isActive ? 'btn-danger' : 'btn-success'}`}
                onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'STOP' : 'START'}
                </button>
                <p className="mt-3 text-muted">
                    Modo: <span className="badge bg-secondary">{isActive ? 'Automático (3s)' : 'Manual'}</span>
                </p>
            </div>
        </div>
    );
};

export default TrafficLights;

