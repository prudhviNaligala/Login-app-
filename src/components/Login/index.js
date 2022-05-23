// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="btn">
      {login}
    </button>
  )
}

export default Login
