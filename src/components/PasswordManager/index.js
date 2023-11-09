import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    addPasswordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswords = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswords = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(preState => ({
      addPasswordsList: [...preState.addPasswordsList, newPasswords],
    }))
  }

  renderEmptyPasswordList = () => {
    return (
      <>
        <img
          className=""
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p>No Passwords</p>
      </>
    )
  }

  renderPasswordList = () => {
    const {addPasswordsList} = this.state

    return (
      <ul className="password-list-container">
        {addPasswordsList.map(passwordObject => (
          <PasswordManagerItem
            key={passwordObject.id}
            eachPasswords={passwordObject}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {addPasswordsList} = this.state

    return (
      <div className="bg-container">
        <img
          className="app-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="add-password-container">
          <div className="add-password">
            <h1 className="add-new-manager-heading">Add New Password</h1>
            <form onSubmit={this.onAddPasswords}>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  type="text"
                  onChange={this.onChangeWebsiteInput}
                  className="input"
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  type="text"
                  onChange={this.onChangeUsernameInput}
                  className="input"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  onChange={this.onChangePasswordInput}
                  className="input"
                  placeholder="Enter Password"
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            className="add-password-image"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="bottom-container">
          <div className="output-password-container">
            <div className="your-password-container">
              <h1 className="add-new-manager-heading">Your Passwords</h1>
              <p className="password-list-counting">
                {addPasswordsList.length}
              </p>
            </div>
            <div className="output-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-image"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                className="output"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="horizontial-line" />
          <div className="output-middle-container">
            <input type="checkbox" className="checkbox-box" id="checkbox" />
            <label className="add-new-manager-heading" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {addPasswordsList.length > 0
            ? this.renderPasswordList()
            : this.renderEmptyPasswordList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
