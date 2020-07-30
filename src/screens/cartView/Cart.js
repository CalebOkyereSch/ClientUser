import React, { Component } from "react";
import CartItem from "../../component/widget/CartItem";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { getUserCart, deleteCartItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import Spinner from "../../component/widget/Spinner";
import PropTypes from "prop-types";

class Cart extends Component {
  componentDidMount() {
    this.props.getUserCart();
  }

  render() {
    const { cart, loading } = this.props.cart;

    return (
      <div className="container-fluid">
        <Navbar />

        <div className="container" style={{ textAlign: "center" }}>
          {cart === loading ? (
            <Spinner />
          ) : cart === null ? (
            <h3 className="form-text text-muted">Empty Cart</h3>
          ) : (
            cart.map((item, index) => {
              return item !== null ? (
                <CartItem
                  id={item._id}
                  key={index}
                  picture={item.main}
                  location={item.location}
                  price={item.price}
                  description={item.description}
                />
              ) : (
                ""
              );
            })
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

Cart.propTypes = {
  getUserCart: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProp, { getUserCart, deleteCartItem })(Cart);
