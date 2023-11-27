import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
function HomeCopmonent() {
    const navigate =useNavigate();
    return ( 
        <>
       <div className="main-home">
        <div >
            <img src="https://img.freepik.com/premium-photo/sale-50-off-advertise-display-frame-setting-clothes-line-store_41418-5.jpg?w=740" alt="img" className="home-img" />
            <div className="image-overlay">
            <h2 className="page-heading">Well Come To E-Store</h2>

            <button className="btn btn-primary m-5" onClick={()=>{navigate("/product")}}>Shop Now!</button>
            </div>
        </div>
        
       </div>
    
        <Footer/>
        </>
     );
}

export default HomeCopmonent;