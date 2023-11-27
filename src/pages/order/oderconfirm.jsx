import { useNavigate } from "react-router-dom";

function OrderConfirm() {
    const nevigateto=useNavigate()
    return ( 
        <>
        <h3>Order Confirmed</h3>
        <button onClick={()=>{nevigateto(-1)}}>Go back</button>
        </>
     );
}

export default OrderConfirm;