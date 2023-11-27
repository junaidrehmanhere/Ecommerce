import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../Redux/CartRedux/CartAction";
import Footer from "../Footer/Footer";
function ProductDetail() {
    const nevigateto = useNavigate();
    const  param = useParams();
    const id = param.id
    const dispatch = useDispatch();
    const quantity = useSelector((state)=> state.quantities);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    window.scroll(0,0);
    const fetchApi = async () => {
      try{
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
  
        setProduct(response.data);
      }catch(error){
        console.log("Error occurs", error);
      }
    };
    fetchApi();
  }, [id]);
  const handleIncrement = () =>{
    dispatch(incrementQuantity());
  };
  const handleDecrement = () =>{
    dispatch(decrementQuantity());
  };
  const handleAddToCart = () =>{
    dispatch(addToCart(product,quantity));
    console.log({product,quantity});
    nevigateto("/cart");
  };
  return (
    <>
      <h1>Product Detail</h1>
      <div className="container mb-5 ">
        <img
          src={product.image}
          alt="product-detail"
          width={300}
          className="product-img"
        />
        <div className="Detail-discription">
          <h2>Product-ID # {product.id}</h2>
          <h2>Category : {product.category}</h2>
          <h2>{product.title}</h2>
          <h2>$ {product.price}</h2>
          <p>{product.description}</p>
          <div className="counter-color">
            {/* <input type="number"  min={1} max={12} placeholder="Qty"/> */}
            <button onClick={handleDecrement} className="btn btn-primary justify-content-center m-2">-</button>
            <span>Quantity : {quantity} </span>
            <button onClick={handleIncrement} className="btn btn-primary justify-content-center m-2">+</button>
            <select>
              <option value="" disabled  >--Please select--</option>
              <option value="color">Black</option>
              <option value="color">White</option>
              <option value="color">Stylish</option>
            </select>
          </div>
          <button onClick={handleAddToCart} className="btn btn-primary justify-content-center m-2">Add to Cart</button>
        </div>
      </div>
      {/* <button onClick={()=>{nevigateto("/order-confirm")}} className="btn btn-primary justify-content-center m-2">Order confirm</button> */}
    <Footer/>
    </>
  );
}

export default ProductDetail;
