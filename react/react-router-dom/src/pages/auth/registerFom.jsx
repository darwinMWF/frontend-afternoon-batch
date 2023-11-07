import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo.avif";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // const {resetForm} = useFormik();
  const navigate = useNavigate();
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Formik
        initialValues={{
          email: "",
          firstname: "",
          password: "",
          confirmPassword: "",
        }}
        // validate={(values)=>{
        //   const errors = {};
        //   const emailRgex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //   if (!values.firstname) {
        //       errors.firstname = 'Required';
        //     } else if (values.firstname.length > 15) {
        //       errors.firstname = 'Must be 15 characters or less';
        //     }
        //   if(!values.email){
        //     errors.email = "required"
        //   }else if(!emailRgex.test(values.email)){
        //     errors.email = "email is not valid"
        //   }

        //     return errors
        // }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(10, "firstname should be less than 10 character")
            .min(4, "minimun four characters required")
            .required("required"),
          email: Yup.string()
            .email(
              "email is not valid",
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
            .required("required"),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              "password should content 8 charcter and at least 1 letter & 1 number"
            )
            .required("required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "password not match")
            .required("required"),
        })}
        onSubmit={async (value, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "Application/Json");
            const data = await fetch(
              "https://jsonplaceholder.typicode.com/posts",
              {
                method: "post",
                headers: myHeaders,
                body: JSON.stringify(value),
              }
            );
            const response = await data.json();
            setSubmitting(false);
            navigate("/");
          } catch (err) {
            console.log(err.message);
            return setSubmitting(false);
          }
          resetForm();
        }}
      >
        {({ isSubmitting, errors,touched }) => (
          <main
            style={{ maxWidth: "400px", height: "auto" }}
            className="border rounded shadow p-4"
          >
            <h1 className="navbar-brand text-center" href="#">
              <img src={logo} alt="logo" width={100} height={100} />
            </h1>

            <Form>
              <label htmlFor="Name">Name</label>
              <Field
                type="text"
                name="firstname"
                id="Name"
                className={
                  errors.firstname && touched.firstname && errors.firstname
                    ? "form-control border border-danger"
                    : "form-control"
                }
              />
              <ErrorMessage name="firstname" className="text-danger" component="div" />
              <label htmlFor="email">email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className={
                  errors.email && touched.email && errors.email
                    ? "form-control border border-danger"
                    : "form-control"
                }
              />
              <ErrorMessage name="email"  className="text-danger" component="div" />
              <label htmlFor="password">passsword</label>
              <Field
                type="password"
                name="password"
                id="password"
                className={
                  errors.password && touched.password && errors.password
                    ? "form-control border border-danger"
                    : "form-control"
                }
              />
              <ErrorMessage name="password" className="text-danger" component="div" />
              <label htmlFor="confirmPassword">confirmPassword</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={
                  errors.confirmPassword && touched.confirmPassword && errors.confirmPassword
                    ? "form-control border border-danger"
                    : "form-control"
                }
              />
              <ErrorMessage name="confirmPassword" className="text-danger" component="div" />
              <button
                type="submit"
                className="mt-3 btn btn-primary w-100"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          </main>
        )}
      </Formik>
    </div>
  );
};

// {({
//   values,
//   errors,
//   touched,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   /* and other goodies */
// }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor="Name">Name</label>
//         <input
//           type="text"
//           id="Name"
//           name="firstname"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.firstname}
//         />
//         {errors.firstname && touched.firstname && errors.firstname}
//       </p>
//       <p>
//         <label htmlFor="email">email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.email}
//         />
//         {errors.email && touched.email && errors.email}
//       </p>
//       <p>
//         <label htmlFor="password">passsword</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.password}
//         />
//         {errors.password && touched.password && errors.password}
//       </p>
//       <p>
//         <label htmlFor="confirm-passsword">confirm-passsword</label>
//         <input
//           type="password"
//           id="confirm-passsword"
//           name="confirmPassword"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.confirmPassword}
//         />
//         {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
//       </p>
//       <button type="submit">submit</button>
//     </form>
//   );
// }}
