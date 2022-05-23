// Write your code here

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <p>{message}</p>
}

export default Message
