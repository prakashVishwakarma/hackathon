
const Signup = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <p>Create Your Account</p>

            <div>
                <label>User Name</label>
                <input type="text" name="username" id="" />
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" id="" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" id="" />
            </div>

            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirm password" id="" />
            </div>

            <button type="button">Sign Up</button>
        </div>
    )
}

export default Signup
