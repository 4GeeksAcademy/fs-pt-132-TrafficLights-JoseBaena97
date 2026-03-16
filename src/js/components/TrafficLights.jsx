import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrafficLights = () => {

    const [colorEncendido, setColorEncendido] = useState('');

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
        </div>
    );
};

export default TrafficLights;

