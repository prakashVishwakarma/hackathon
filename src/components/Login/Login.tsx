import { useFormik } from "formik";
import * as Yup from "yup";
import { getDataFromLocalStorage } from "../../Utils/Utils";
import { myLocalData } from "../../constants/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    // Define the validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // Initialize Formik with initial values, validation schema, and submission handler
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const { data, exists } = getDataFromLocalStorage<any>(myLocalData);
            console.log("Form Submitted", values);
            console.log("Data found:", data);

            if (exists) {
                if((data.credentials.userName === values.username) && (data.credentials.password === values.password)){
                    navigate('/')
                }else{
                    formik.setErrors({ 'password': "User name or password not matching." });
                }
            } else {
                console.log("Data not found in local storage.");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to login</p>

            <div>
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div style={{ color: "red" }}>{formik.errors.username}</div>
                ) : null}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit">Login</button>
            <p>Forgot password</p>
            <p>
                Don't have an account? <b>Sign Up</b>
            </p>
        </form>
    )
}

export default Login
