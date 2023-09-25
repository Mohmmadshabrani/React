import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const SignupForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    navigate('/about' , {state:values});
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
