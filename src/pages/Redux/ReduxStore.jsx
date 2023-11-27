import {createStore} from "redux";
import { ProductDetailReducer } from "./CartRedux/CartReducer";

const Store = createStore(ProductDetailReducer);
export default Store;