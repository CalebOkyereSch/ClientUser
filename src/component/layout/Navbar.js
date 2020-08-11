import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearUserCart } from "../../actions/cartActions";
import { searchLocation } from "../../actions/searchActions";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
    };
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearUserCart();
    this.props.logoutUser();
  }

  onSubmit() {
    let loc = {
      location: this.state.location,
    };
    this.props.searchLocation(loc);
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 site-header sticky-top py-1">
        <div className="container">
          <img src="../images/logo.ico" width="30" height="30" alt="logo" />
          <Link
            className="navbar-brand h1 "
            to="/home"
            style={{ float: "left" }}
          >
            Hemight Properties
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="row justify-content-center container-fluid">
            <form>
              <div className=" row no-gutters align-items-center">
                <div className="col">
                  <input
                    className="form-control  form-control-sm "
                    type="search"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange.bind(this)}
                    placeholder="Search Properties In Location"
                    style={{ width: "300px" }}
                  />
                </div>

                <div className="col-auto">
                  <Link
                    to="/search"
                    className="btn btn-sm"
                    style={{ background: "#03cafc", color: "#fff" }}
                    onClick={this.onSubmit.bind(this)}
                  >
                    Search
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link h6" to="/products">
                  {" "}
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h6" to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <Link
                    className="nav-link h6"
                    to="/cart"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: 100,
                    }}
                  >
                    Cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </Link>
                ) : (
                  ""
                )}
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link className="nav-link h6" to="#">
                    <img
                      className="rounded-circle"
                      src={user.avatar}
                      width="20"
                      height="20"
                      alt="dp"
                      title="You must have a Gravatar attached to your email to display image"
                    />
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link h6" to="/signup">
                    Register
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {isAuthenticated ? (
                  <Link
                    className="nav-link h6"
                    to="#"
                    onClick={this.onLogoutClick.bind(this)}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link h6" to="/signin">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  searchLocation: PropTypes.func.isRequired,
  clearUserCart: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  logoutUser,
  clearUserCart,
  searchLocation,
})(Navbar);
