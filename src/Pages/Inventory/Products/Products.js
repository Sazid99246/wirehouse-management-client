import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://desolate-island-13153.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://desolate-island-13153.herokuapp.com/product/${id}`
            fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount){
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td><img className='table-img' src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => deleteProduct(product._id)} className='bg-danger text-white border-0'><MdDeleteForever /></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Products;