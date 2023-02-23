import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/ProductService";

function AddProductComponent(props) {
    const initialState = {
        productId: "",
        productName: "",
        productPrice: ""
    };

    //define state for product using useState Hook
    const [product, setProduct] = useState(initialState);
    //const navigate = useNavigate();

    function getTitle() {
        if (product.productId === '_add') {
            return <h3 className="text-center">Add Product</h3>
        } else {
            return <h3 className="text-center">Update Product</h3>
        }
    }

    function handleChange(event){
        setProduct({...product,[event.target.name]:event.target.value})
    }

 /*    function handleCancel(){
        navigate("/");
    } */

    function handleSubmit(event){
        event.preventDefault();
        async function createProduct(){
            try{
                ProductService.createProduct(product).then(
                    (res) => {
                        alert("product added successfully....")
                    }
                )
            }catch(error){
                console.log(error);
            }
        }
        createProduct();
    }

    return (
        <div>
            <br /><br />
            <div className="container" style={{ maxWidth: "400px" }}>
            <br /><br />
                <div className="row">
                   {/*  <div>
                        {
                            getTitle()
                        }
                    </div> */}
                    <br /><br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Product Name</label>
                            <input type="text"
                                name="productName"
                                className="form-control"
                                value={product.productName}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Product Price</label>
                            <input type="text"
                                name="productPrice"
                                className="form-control"
                                value={product.productPrice}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="btn-group">
                            <input type="submit" value="Submit" 
                            className="btn btn-primary" />
                            <button
                                type="button"
                                //onClick={handleCancel}
                                className="btn btn-secondary"
                                style={{ marginLeft: "400px" }}>
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddProductComponent;