import axios from "axios";

const PRODUCT_API_BASE_URL = 'http://localhost:8080/product';

class ProductService {

    //method to get all products from backend using above URL
    //http://localhost:8080/product/listproducts
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL+'/listproducts');
    }

    //http://localhost:8080/product/saveproduct
    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+'/saveproduct',product)
    }

    //http://localhost:8080/product/findproduct/{pid}
    getProductById(productid){
        return axios.get(PRODUCT_API_BASE_URL+'/findproduct/'+productid);
    }

}

export default new ProductService();