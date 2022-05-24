// Write your code here

import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <p className="para">{message}</p>
}

export default Message
