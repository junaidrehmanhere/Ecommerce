// import { useLocation, useNavigate } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FireBase";
import LoggInContext from "../context/createcontext/createlogincontext";
function LogIn() {
  const [user, setUser] = useState([null]);
  const context = useContext(LoggInContext);
  const { IsLoggedIn, setIsLoggedIn } = context;
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);
  const FormikValidation = {
    email: "",
    password: "",
  };
  const ValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email"),
    password: yup.string().required("Please enter your password").min(6),
  });

  const handleSubmit = async (value) => {
    if (value.email && value.password) {
      try {
        const logInUser = await signInWithEmailAndPassword(
          auth,
          value.email,
          value.password
        );
        console.log(logInUser);
        setIsLoggedIn(true);
        navigate(-1);
        console.log("value:", value);
      } catch (error) {
        console.log("Login user Error:", error);
      }
    }
  };

  return (
    <div>

      <div className="container justify-content-center d-block w-25 border border-radius border-light rounded-sm shadow-lg p-4 mb-5 bg-white custom-class ">
        <div className="row justify-content-center">
          <h3 className="feature"> LogIn Here</h3>
        </div>
        <Formik
          initialValues={FormikValidation}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="form-control input_user"
              ></Field>
              <p>
                <ErrorMessage name="email" />
              </p>
            </div>
            <div>
              <Field
                type="text"
                name="password"
                placeholder="Enter your password"
                className="form-control input_pass"
              ></Field>
              <p>
                <ErrorMessage name="password" />
              </p>
            </div>
            <button
              type="submit"
              className=" col sm-1 btn btn-primary justify-content-center"
            >
              Login
            </button>
          </Form>
        </Formik>
        <p className="font-weight-bold my-2">Don't have an account?<Link to={"/sign-up"}> Sign up</Link></p>
      </div>
    </div>
  );
}

export default LogIn;
