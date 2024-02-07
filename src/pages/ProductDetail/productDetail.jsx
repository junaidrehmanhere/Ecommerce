import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../Redux/CartRedux/CartAction";
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
      <h1 className="feature my-4 mx-5">Product Details</h1>
      <div className="container mb-5 ">
        <img
          src={product.image}
          alt="product-detail"
          width={400}
          className="product-img px-4 py-4"
        />
        <div className="Detail-discription">
          <h5 className="feature">Product-ID # {product.id}</h5>
          <h4>Category : {product.category}</h4>
          <h4>{product.title}</h4>
          <h5 className="feature">$ {product.price}</h5>
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

      <div className="container news-container ">
      <div className="row-md-6 product-news">
        <h1 className="feature">Stay in the Loop!</h1>
        <h5>Subscribe to Our Newsletter for Exclusive Updates <br /> and Offers</h5>
      <div className="news-email py-3">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              id=""
              size={40}
            />
          </div>
          <button className="btn btn-primary py-2 px-4 font-weight-bold">
            Subscribe
          </button>
      </div>
    </div>
      {/* <button onClick={()=>{nevigateto("/order-confirm")}} className="btn btn-primary justify-content-center m-2">Order confirm</button> */}
    </>
  );
}

export default ProductDetail;
