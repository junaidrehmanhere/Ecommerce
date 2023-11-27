import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import "./category.css";
import Footer from "../../pages/Footer/Footer";
function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://fakestoreapi.com/products/categories`
      );
      setCategories(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div >
        {categories.map((e, i) => (
          <Link key={i} to={`/product/${e}`} >
            <div className="Category-list">
              <h3>{e}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Category;
