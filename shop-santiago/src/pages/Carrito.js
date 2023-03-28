import React, { useState, useEffect } from 'react';

export default function Carrito() {
    const [cesta, setCesta] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cesta') || '[]');
        setCesta(data);
    }, []);

    const eliminarProducto = (index) => {
        const nuevaCesta = [...cesta];
        nuevaCesta.splice(index, 1);
        localStorage.setItem('cesta', JSON.stringify(nuevaCesta));
        setCesta(nuevaCesta);
        alert('Producto eliminado del carrito');
    };

    const PrecioTotal = cesta.reduce((total, product) => total + product.price, 0);

    return (
        <React.Fragment>
            {cesta.length === 0 ? (
                <p className='cesta-vacia'>Aún no hay productos en el carrito...</p>
            ) : (
                <React.Fragment>
                    <div className='productos'>
                        {cesta.map((product, index) => (

                            <div key={index} className="art">
                                <h3 id="ptitle">{product.title}</h3>
                                <p id="desc">{product.description}</p>
                                <img src={product.image} alt={product.title} />
                                <p>Precio: {product.price} €</p>
                                <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                    <p id='total'>Precio total: {PrecioTotal.toFixed(2)} €</p>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

