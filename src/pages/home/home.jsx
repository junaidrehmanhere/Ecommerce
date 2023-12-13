import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
function HomeCopmonent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-home">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/sale-50-off-advertise-display-frame-setting-clothes-line-store_41418-5.jpg?w=740"
            alt="img"
            className="home-img"
          />
          <div className="image-overlay">
            <h2 className="page-heading">Well Come To E-Store</h2>

            <button
              className="btn btn-primary m-5"
              onClick={() => {
                navigate("/product");
              }}
            >
              Shop Now!
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Our Feature Products</h1>
        <div className="feature-content">
          <img
            src="https://static-01.daraz.pk/p/6ad2093b6f1f75625a96adaf11549995.jpg"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/0fb1ebfb51aad4a685e52f8249138d55.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/fb1ba595ed26feea9f80d56be23a6cf7.jpg"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/d0cc1af6961d4757c7a84a6a70134767.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
          <img
            src="https://pk-live-21.slatic.net/kf/S9eeabe9fa486416abf61383d91dea941D.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/68b5380f7c60c18687e8fea267876e6b.jpg_200x200q80.jpg_.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/c675ffaf66a8b0c1004ca9b2ffcc9676.jpg_200x200q80.jpg_.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/35241eaf61f9c1fefc2be3bf39242b27.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/7b0657c7d7adcea821dfd412d462498a.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
          <img
            src="https://static-01.daraz.pk/p/b611db4429604190f72ec637c389ac66.jpg_300x0q75.webp"
            alt=""
            width={200}
          />
        </div>
        <div className="btn-explore">
          <button
            className="btn btn-primary m-5"
            onClick={() => {
              navigate("/product");
            }}
          >
            Explore more!
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomeCopmonent;
