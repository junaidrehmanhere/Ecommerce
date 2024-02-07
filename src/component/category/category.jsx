import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <div className="category-heading">
        <h1 className="feature">Categories</h1>
      </div>
      <div className="category">
        {categories.map((e, i) => (
          <Link key={i} to={`/product/${e}`}>
            <div className="category-card">
              <img
                src="https://pyxis.nymag.com/v1/imgs/438/5e8/5c1dbeae6996745d2e01883de4255a509f-jewelry-cleaner.jpg"
                alt=""
                width={150}
              />
              <h3>{e}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Category;
