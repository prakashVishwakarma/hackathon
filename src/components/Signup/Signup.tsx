import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setLocalStorage, updateConstant } from '../../Utils/Utils';
import { myLocalData } from '../../constants/constant';

const Signup = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: '', // Organizers or Participants
        },
        validationSchema: Yup.object({
            userName: Yup.string().required('User Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
            role: Yup.string().required('Please select a role'),
        }),
        onSubmit: (values) => {
            if ((setLocalStorage(myLocalData, updateConstant(values))) && (updateConstant(values).boolean)) navigate('/login')
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Sign Up</h1>
            <p>Create Your Account</p>

            <div>
                <label>User Name</label>
                <input
                    type="text"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName ? (
                    <div>{formik.errors.userName}</div>
                ) : null}
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>

            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <div>
                <label>Sign Up as Organizers / Participants</label>
                <select
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Select Role</option>
                    <option value="Organizers">Organizers</option>
                    <option value="Participants">Participants</option>
                </select>
                {formik.touched.role && formik.errors.role ? (
                    <div>{formik.errors.role}</div>
                ) : null}
            </div>

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;



// const Signup = () => {
//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <p>Create Your Account</p>

//             <div>
//                 <label>User Name</label>
//                 <input type="text" name="username" id="" />
//             </div>

//             <div>
//                 <label>Email</label>
//                 <input type="email" name="email" id="" />
//             </div>

//             <div>
//                 <label>Password</label>
//                 <input type="password" name="password" id="" />
//             </div>

//             <div>
//                 <label>Confirm Password</label>
//                 <input type="password" name="confirm password" id="" />
//             </div>

//             <div>
//                 <label>Sign Up as Organizers / Participants </label>
//                 <select name="Organizers/Participants" id="cars">
//                     <option value=""></option>
//                     <option value="Organizers">Organizers</option>
//                     <option value="Participants">Participants</option>
//                 </select>
//             </div>

//             <button type="submit">Sign Up</button>
//         </div>
//     )
// }

// export default Signup
