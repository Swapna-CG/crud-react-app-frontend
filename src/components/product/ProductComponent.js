
import React, { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';

function ProductComponent(){

    //useState for state of the component
    const[products,setProducts] = useState([]);

    //this method call service method to get all products
    const getProducts = () => {
        ProductService.getProducts().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        });
    };

    useEffect(() =>{
        getProducts()
    },[]);

    return(
        <div className="container">
            <h1 className="text-center">Product List</h1>
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product =>
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                        </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
    )


}

export default ProductComponent;