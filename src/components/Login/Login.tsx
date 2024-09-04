
const Login = () => {
    return (
        <div>
            <h1>Wellcome Back</h1>
            <p>Enter your credentials to login</p>

            <div>
                <label>User Name</label>
                <input type="text" name="username" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" />
            </div>

            <button type="button">Login</button>
            <p>Forgot password</p>
            <p>Don't have an account <b>Sugn Up</b></p>
        </div>
    )
}

export default Login
