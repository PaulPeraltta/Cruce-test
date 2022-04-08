import { GET_PRODUCT, GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT, ORDER_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  orderedProducts: [],
  product: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        orderedProducts: action.payload,
      };
    case POST_PRODUCT: {
        return {
          ...state,
        };
      };
    case DELETE_PRODUCT: {
      return {
        ...state
      }
    };

    case ORDER_PRODUCTS:
      let ordProd = state.products;
      var ordProdPrice =
        action.payload === "DESCENDENTE"
          ? ordProd.sort((a, b) => {
              if (parseInt(a.price, 10) < parseInt(b.price, 10)) return 1;
              if (parseInt(a.price, 10) > parseInt(b.price, 10)) return -1;
              return 0;
            })
          : ordProd.sort((a, b) => {
              if (parseInt(a.price, 10) < parseInt(b.price, 10)) return -1;
              if (parseInt(a.price, 10) > parseInt(b.price, 10)) return 1;
              return 0;
            });

            console.log("order products price", ordProdPrice)
      return {
        ...state,
        orderedProducts: action.payload === "ALL" ? [...state.products] : [...ordProdPrice],
      };

    default:
      return state;
  }
}
