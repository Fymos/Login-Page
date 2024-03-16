const Login = () => {
  return (
    <div className="login">
      <div className="text">
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
      </div>
      <div className="wrapper">
        <input type="text" placeholder="Login"/>
        <input type="password" placeholder="Password"/>
        <div className="check">
          <label className="box">
            <input className="checkbox" type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="btn-3">Login</button>
      </div>
      <button className="theme"></button>
    </div>
  )
}
export default Login