import React, { useState, useEffect } from 'react';

export default function Carrito() {
    const [cesta, setCesta] = useState([]);
    const [descuento, setDescuento] = useState(0);

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

    const precioTotal = cesta.reduce(
        (total, producto) => total + producto.price, 0
    );

    const precioTotalConDescuento = precioTotal - (precioTotal * descuento) / 100;

    const dto10 = () => {
        setDescuento(10);
        alert('Descuento del 10% aplicado');
    };

    const dto50 = () => {
        setDescuento(50);
        alert('Descuento del 50% aplicado')
    };

    const pago = () => {
        localStorage.removeItem('cesta');
        setCesta([]);
        alert('Gracias por su compra');
        window.location.href = '/';
    };

    return (
        <React.Fragment>
            {cesta.length === 0 ? (
                <p className='cesta-vacia'>Aún no hay productos en el carrito...</p>
            ) : (
                <React.Fragment>
                    <div className='productos'>
                        {cesta.map((product, index) => (
                            <div key={index} className='art'>
                                <h3 id='ptitle'>{product.title}</h3>
                                <p id='desc'>{product.description}</p>
                                <img src={product.image} alt={product.title} />
                                <p>Precio: {product.price} €</p>
                                <button id='btn' onClick={() => eliminarProducto(index)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                    <div className='dts'>
                        <p>Puedes usar uno de los siguientes descuentos:</p>
                        <button id='btn' onClick={dto10} disabled={descuento !== 0}>DTO10</button>
                        <button id='btn' onClick={dto50} disabled={descuento !== 0}>DTO50</button>
                    </div>
                    <br />
                    <div id='total'>
                        Precio Total: <span id='price'>{precioTotalConDescuento.toFixed(2)} €</span><br />
                        <button id='btnpago' onClick={() => pago()}>Comprar</button>
                    </div>
                </React.Fragment>
            )}
            <br /><br />
        </React.Fragment>
    );
}
