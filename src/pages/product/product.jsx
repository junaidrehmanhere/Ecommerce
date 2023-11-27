import axios from "axios";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Product() {
  const [searchData, setsearchData] = useState("");
  const [sortprice, Setsortprice] = useState("");
  const [Data, SetData] = useState([]);

  const param = useParams();
  console.log(param.categories);
  if (!param.categories) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          // console.log(response.data)
          SetData(response.data);
        } catch (error) {
          console.log("Error detecting while fetching data", error);
        }
      };
      fetchData();
    }, []);
  } else {
    useEffect(() => {
      const categoryData = async () => {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${param.categories}`
          );
          // console.log(response.data)
          SetData(response.data);
        } catch (error) {
          console.log("Error detecting while fetching data", error);
        }
      };
      categoryData();
    }, []);
  }

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

    <div className="container d-block ">
      <div className="d-flex ">
        <h2>Products</h2>
      </div>
      <div className=" row flex-row-reverse">
        <button className="btn btn-primary justify-content-center ">
          Search
        </button>
        <input
          type="text"
          placeholder="Search here"
          name=""
          onChange={(e) => setsearchData(e.target.value)}
        />
      </div>

      <div className="row d-flex flex-row-reverse">
        <button
          onClick={SortingLow}
          className="btn btn-primary justify-content-center m-2"
        >
          Low to High
        </button>
        <button
          onClick={SortingHigh}
          className="btn btn-primary justify-content-center m-2"
        >
          High to Low
        </button>
        <button
          onClick={SortingAtoZ}
          className="btn btn-primary justify-content-center m-2"
        >
          Sort A to Z
        </button>
        <button
          onClick={SortingZtoA}
          className="btn btn-primary justify-content-center m-2"
        >
          Sort Z to A
        </button>
      </div>

      <div className="cards">
        {filteredData.map((e, index) => (
          
            
            <Link to={`/product-detail/${e.id}`} key={index}>
              
                <img src={e.image} width={150} />
             
              <h4> {e.title}</h4>
              <h6>$ {e.price}</h6>
            </Link>
           
       
        ))}
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Product;
