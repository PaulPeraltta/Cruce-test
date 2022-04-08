import axios from "axios";

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const POST_PRODUCT = 'POST_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ORDER_PRODUCTS = 'ORDER_PRODUCTS';


export function getProducts() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/products')
        .then(p => {
            dispatch({
                type: GET_PRODUCTS,
                payload: p.data
            })
        })
        .catch((err) => {
            console.log(err); 
        })
    }
}

export function getProduct(id) {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/products/' + id)
        .then(p => {
            dispatch({
                type: GET_PRODUCT,
                payload: p.data
            })
        })
        .catch((err) => {
            console.log(err); 
        })
    }
}

export function postProduct(payload) {
    return function(dispatch) {
         axios.post('http://localhost:3001/api/products', payload)  //payload === body
         .then(resp => {
            return resp;
         })
         .catch((err) => {
            console.log(err); 
        })
    }
}

export function editProduct(id, name, image, price, category, stock, discount, term) {
    return function(dispatch) {
        axios.put(`http://localhost:3001/api/products/${id}`, {name, image, price, category, stock, discount, term})
        .then(resp => {
            return resp;
         })
         .catch((err) => {
            console.log(err); 
        })
    }
} 

export function deleteProduct(id) {
    return function(dispatch) {
        axios.delete(`http://localhost:3001/api/products/${id}`)
        .then(resp => {
            dispatch({
                type: DELETE_PRODUCT,
                products: resp.data,
            })
        })
        .catch((e) => console.log(e))
    }
} 

// ----------------------------------------------------------------------

export function orderProducts(order) {
    return {
        type: ORDER_PRODUCTS,
        payload: order
    }
}