import React, { useState, useEffect } from 'react';

export default function Productos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const api = await fetch('https://fakestoreapi.com/products?limit=4');
            const datos = await api.json();
            setProducts(datos);
        }
        fetchProducts();
    }, []);

    const addCesta = (product) => {
        const cesta = JSON.parse(localStorage.getItem('cesta') || '[]');
        localStorage.setItem('cesta', JSON.stringify([...cesta, product]));
        alert('Producto añadido al carrito');
    };

    return (
        <React.Fragment>
            <div className="productos">
                {products.map((product) => (
                    <div className="art" key={product.id}>
                        <h3 id="ptitle">{product.title}</h3>
                        <p id="desc">{product.description}</p>
                        <img src={product.image} alt={product.title} />
                        <p>Precio: {product.price} €</p>
                        <p id="rate">
                            {Array.from({ length: product.rating.rate }, (_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </p>
                        <p id="rates">{product.rating.count} valoraciones</p>
                        <button id="btn" onClick={() => addCesta(product)}>Añadir al carrito</button>
                        <br /><br />
                    </div>
                ))}
            </div>
            <br /><br />
        </React.Fragment>
    );
}
