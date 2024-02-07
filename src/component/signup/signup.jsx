import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import LogIn from "../logIn/login";
import * as yup from "yup";
import "./signup.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/FireBase";
import { useNavigate } from "react-router-dom";
const passwordrole = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
function SignUp() {
  const navigate = useNavigate();

  const FormikValidation = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    termandcond: false,
  };
  const ValidationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email"),
    termandcond: yup
      .boolean()
      .oneOf([true], "Please accept term and condition first."),
    password: yup
      .string()
      .required("Please enter your password")
      .min(5)
      .matches(passwordrole, { message: "Please create a strong password" }),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required("Required"),
  });
  const handleSumbit = async (values) => {
    // console.log("value",values)
    if (
      values.name &&
      values.email &&
      values.password &&
      values.confirmpassword &&
      values.termandcond
    ) {
      try {
        const register = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await updateProfile(register.user, {
          displayName: values.name,
        });
        navigate("/log-in");
      } catch (error) {
        console.log("Registration Error", error);
      }
    }
  };

  return (
    <div>
      <div className="container justify-content-center d-block w-25 custom-class  border border-radius border-light rounded-sm shadow-lg p-4 mb-4 bg-white  ">
        <h3 className="row justify-content-center feature">Sign Up</h3>
        <Formik
          initialValues={FormikValidation}
          validationSchema={ValidationSchema}
          onSubmit={handleSumbit}
        >
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="form-control input_user"
            />
            <p>
              <ErrorMessage name="name" />
            </p>
            <Field
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="form-control input_user"
            />
            <p>
              <ErrorMessage name="email" />
            </p>
            <Field
              type="text"
              name="password"
              placeholder="Enter your password"
              className="form-control input_user"
            />
            <p>
              <ErrorMessage name="password" />
            </p>
            <Field
              type="text"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="form-control input_user"
            />
            <p>
              <ErrorMessage name="confirmpassword" />
            </p>
            <label>
              <Field type="checkbox" name="termandcond" /> I accept term and
              condition
            </label>
            <p>
              <ErrorMessage name="termandcond" />
              <button
                type="submit"
                className="col sm-1 btn btn-primary justify-content-center"
              >
                Sign Up
              </button>
            </p>
          </Form>
        </Formik>
        <p className="font-weight-bold"> Already have an account?<Link to={'/log-in'}> Log In</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
