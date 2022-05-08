import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
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
    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='text-center'>#</th>
                        <th className='text-center'>Image</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Description</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Delete</th>
                        <th className='text-center'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td>{product._id}</td>
                            <td><img className='table-img' src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => deleteProduct(product._id)} className='bg-danger text-white border-0'><MdDeleteForever /></button></td>
                            <td><Button onClick={()=>navigateToProductDetail(product._id)} variant='primary'>Update</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Products;