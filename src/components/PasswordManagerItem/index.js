import './index.css'

const PasswordManagerItem = props => {
  const {eachPasswords} = props
  const {website, username, password} = eachPasswords

  return (
    <li className="list-items">
      <div className="three-container">
        <p className="web-paragraph">{website}</p>
        <p className="web-paragraph">{username}</p>
        <p className="web-paragraph">{password}</p>
      </div>
    </li>
  )
}

export default PasswordManagerItem
