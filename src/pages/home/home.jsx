import { useNavigate } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function HomeCopmonent() {
  const navigate = useNavigate();
  const [sliceData, setSliceData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fatchCategory = async () => {
      try {
        const res = await axios(`https://fakestoreapi.com/products/categories`);
        setCategoryData(res.data);
      } catch (error) {
        console.log("Category Error", error);
      }
    };
    fatchCategory();
    const fatchApi = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setSliceData(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fatchApi();
  }, []);
  // const firstFourItems = sliceData.slice(0, 4);
  let boxCard = document.querySelector(".home-card");
  const prebtn = () => {
    let width = boxCard.clientWidth;
    boxCard.scrollLeft = boxCard.scrollLeft - width;
  };
  const nextbtn = () => {
    let width = boxCard.clientWidth;
    boxCard.scrollLeft = boxCard.scrollLeft + width;
  };
  return (
    <>
      <div>
        <div className="container main p-5  text-white">
          <div className="row d-block " data-aos="slide-right">
            <h2 className="col px-5 py-4 banner-font">
              Elevate Your E-Commerce Journey
            </h2>
            <h5 className="col px-5 py-0 ">
              Explore Shopping in Its Truest Essence
            </h5>
            <div className="col p-5 mx-3">
              <button
                className="btn btn-primary mx-3 font-weight-bold"
                onClick={() => {
                  navigate("/product");
                }}
              >
                Shop Now
              </button>
              <button className="btn text-white mx-3 font-weight-bold ">
                Learn More
              </button>
            </div>
          </div>
          <div className="row banner-image" data-aos="slide-left">
            <img src="src/images/bannergirl.png" alt="" width={378} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="feature  mt-5 text-center">Featured Products</h1>
        <div className="overflow-btn">
          <FaChevronLeft className="pre-btn" onClick={prebtn} />
          <FaChevronRight className="next-btn" onClick={nextbtn} />
        </div>
        <div className="home-card" data-aos="fade-up">
          {sliceData.map((e, index) => (
            <Link to={`/product-detail/${e.id}`} key={index}>
              <img src={e.image} />
              <h5>{e.title.slice(0, 15)}...</h5>
              <h6 className="btn btn-primary">$ {e.price}</h6>
            </Link>
          ))}
        </div>
        <div className="justify-content-center d-flex ">
          <button
            className="btn btn-primary m-5 font-weight-bold"
            onClick={() => {
              navigate("/product");
            }}
          >
            See All Products
          </button>
        </div>
      </div>
      <div>
        <h1 className="feature  mt-4 px-5">Shop by Category</h1>
        <div className="container home-category d-flex ">
          {categoryData.map((e, i) => (
            <Link key={i} to={`/product/${e}`}>
              <div className="home-category ">
                <h5>{e}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, provident.
                </p>
                <h6 className="category-view">
                  View {e} <IoIosArrowForward className="category-view" />
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container-fluid exp-fluid text-center">
        <h1 className="feature py-5 ">
          Experience Streamlined Shopping with Crescendo
        </h1>
        <div className=" d-flex  py-5">
          <div className="exp-cards px-5 ">
            <TbTruckDelivery className="icons" />
            <h4>Free Delivery</h4>
            <p>
              Lorem, ipsum dolor sit adipisicing elit. Repellendus Consequatur
              ea saepe non porro.
            </p>
          </div>
          <div className="exp-cards px-5">
            <AiOutlineShopping className="icons" />
            <h4>Self Pickup</h4>
            <p>
              Dolor sit amet consectetur. Expedita ducimus commodi porro harum.
              Lorem, ipsum natus.
            </p>
          </div>
          <div className="exp-cards px-5">
            <MdOutlineGppGood className="icons" />
            <h4>Warranty</h4>
            <p>
              Natus sit amet, consectetur adipisicing molestias natus cumque
              consequatur voluptatem.
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary font-weight-bold"
          onClick={() => {
            navigate("/product");
          }}
        >
          Shop Now
        </button>
      </div>
      <div className="container-fluid ">
        <h1 className="feature py-5 text-center">Why Crescendo?</h1>
        <div className="d-flex py-2 px-4" data-aos="zoom-in-up">
          <div className="crescendo-why mx-5 my-4">
            <h3>
              <BiSolidRightArrow className="item-why" fontSize={20} />
              Exceptional Quality
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius commodo aliquam.
            </p>
            <h3>
              <BiSolidRightArrow className="item-why" fontSize={20} />
              Versatile and User-Friendly
            </h3>
            <p>
              Maecenas eu dui dictum, imperdiet metus et, dapibus nisl. Integer
              sit amet augue magna.
            </p>
          </div>
          <div className="why-img ">
            <img src="src/images/img cloth.png" alt="" width={250} />
          </div>
          <div className="crescendo-why mx-5 my-4">
            <h3>
              <BiSolidRightArrow className="item-why" fontSize={20} />
              Innovative Design
            </h3>
            <p>
              Mauris laoreet congue ipsum at ultricies. Phasellus mattis dictum
              neque, vel sagittis odio pellentesque at.
            </p>
            <h3>
              <BiSolidRightArrow className="item-why" fontSize={20} />
              Superior Build and Durability
            </h3>
            <p>
              Aliquam vel augue sed justo sagittis lobortis. Vestibulum
              porttitor sit amet magna id elementum.
            </p>
          </div>
        </div>
        <div className="crescendo-btn d-flex justify-content-center py-5">
          <button
            className="btn btn-primary mx-3 py-2 font-weight-bold"
            onClick={() => {
              navigate("/product");
            }}
          >
            Shop Now
          </button>
          <button className="btn btn-light mx-3 py-2 font-weight-bold">
            Learn More
          </button>
        </div>
      </div>
      <div
        className="container-fluid d-flex join-container"
        data-aos="flip-down"
      >
        <div className="join-img">
          <img src="src/images/happy.png" alt="" width={560} />
        </div>
        <div className="join-form">
          <h1 className=" feature px-5">Join Our List Today!</h1>
          <p className="px-5">Be the first to know</p>
          <div className="d-flex ">
            <div className="mx-5">
              <h5>
                <AiOutlineCheckCircle className="join-icon mx-1" />
                Limited edition products
              </h5>
            </div>
            <div className="mx-5">
              <h5>
                <AiOutlineCheckCircle className="join-icon mx-1" />
                Special offers
              </h5>
            </div>
          </div>
          <div className="d-flex mx-1">
            <div className="mx-5">
              <h5>
                <AiOutlineCheckCircle className="join-icon" />
                Exclusive contents
              </h5>
            </div>
            <div className="mx-5">
              <h5 className="mx-5">
                <AiOutlineCheckCircle className="join-icon mx-1" />
                No spams!
              </h5>
            </div>
          </div>
          <div className="join-input">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              id=""
              size={60}
            />
          </div>
          <button className="btn btn-primary mx-5 py-2 px-4 font-weight-bold">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeCopmonent;
