import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
function Product() {
  const [searchData, setsearchData] = useState("");
  const [sortprice, Setsortprice] = useState("");
  const [Data, SetData] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const param = useParams();
  // console.log(param.categories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!param.categories) {
          response = await axios.get("https://fakestoreapi.com/products");
        } else {
          response = await axios.get(
            `https://fakestoreapi.com/products/category/${param.categories}`
          );
        }
        SetData(response.data);
      } catch (error) {
        console.log("Error detecting while fetching data", error);
      }
    };

    fetchData();
  }, [param.categories]);

  useEffect(() => {
    const categoryFatch = async () => {
      try {
        const res = await axios(`https://fakestoreapi.com/products/categories`);
        setCategoryProduct(res.data);
      } catch (error) {
        console.log("Category Fatch Error", error);
      }
    };
    categoryFatch();
  }, []);

  const filteredData = Data.filter((item) => {
    return item.title.toLowerCase().includes(searchData.toLowerCase());
  });
  const SortingLow = () => {
    const sortprice = [...Data];
    sortprice.sort((a, b) => a.price - b.price);
    SetData(sortprice);
  };
  const SortingHigh = () => {
    const sortprice = [...Data];
    sortprice.reverse((a, b) => a.price - b.price);
    SetData(sortprice);
  };
  const SortingAtoZ = () => {
    const sortprice = [...Data];
    sortprice.sort((a, b) => a.title.localeCompare(b.title));
    SetData(sortprice);
  };
  const SortingZtoA = () => {
    const sortprice = [...Data];
    sortprice.reverse((a, b) => a.title.localeCompare(b.title));
    SetData(sortprice);
  };

  return (
    <div>
      <div className="container-fluid d-block ">
        <div className="d-flex ">
          <h2 className="feature my-4 mx-5">Products</h2>
        </div>
        <div className=" row flex-row-reverse mx-4">
          <button className="btn btn-primary justify-content-center mx-2 ">
            Search
          </button>
          <input
            type="text"
            placeholder="Search here"
            name=""
            onChange={(e) => setsearchData(e.target.value)}
            className="p-2"
          />
        </div>

        <div className="row d-flex flex-row-reverse mx-4">
          <button
            onClick={SortingHigh}
            className="btn btn-primary justify-content-center m-2"
          >
            High to Low
          </button>
          <button
            onClick={SortingLow}
            className="btn btn-primary justify-content-center m-2"
          >
            Low to High
          </button>
          <button
            onClick={SortingZtoA}
            className="btn btn-primary justify-content-center m-2"
          >
            Sort Z to A
          </button>
          <button
            onClick={SortingAtoZ}
            className="btn btn-primary justify-content-center m-2"
          >
            Sort A to Z
          </button>
        </div>
      </div>
      <div className="container-fluid d-flex  ">
        <div className="w-25 d-category ">
          <h5 className="feature">Product Category</h5>
          <hr />
          <div className="d-category-list">
            <a href="" className="font-weight-bold">
              All products
            </a>
            <div className="py-2 ">
              {categoryProduct.map((e, i) => (
                <Link key={i} to={`/product/${e}`}>
                  <div className="">
                    <h5 className="d-list">{e}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="cards w-75">
          {filteredData.map((e, index) => (
            <Link to={`/product-detail/${e.id}`} key={index}>
              <img src={e.image} />

              <h4> {e.title.slice(0, 15)}....</h4>
              <button className="btn btn-primary">$ {e.price}</button>
            </Link>
          ))}
        </div>
      </div>

      <div className="container news-container ">
        <div className="row-md-6 product-news">
          <h1 className="feature">Stay in the Loop!</h1>
          <h5>
            Subscribe to Our Newsletter for Exclusive Updates <br /> and Offers
          </h5>
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

    </div>
  );
}

export default Product;
