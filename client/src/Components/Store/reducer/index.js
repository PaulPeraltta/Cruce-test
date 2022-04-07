import { GET_PRODUCT, GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT } from "../actions";

const initialState = {
  products: [],
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
    }
    default:
      return state;
  }
}
