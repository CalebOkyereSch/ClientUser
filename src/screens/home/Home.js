import React, { Component } from "react";
import Item from "../../component/widget/Item";
import HomeCards from "../../component/widget/HomeCards";
import { Link, withRouter } from "react-router-dom";
import { getProduct } from "../../actions/productActions";
import { getItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Scroller from "../../component/widget/Scroller";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Spinner from "../../component/widget/Spinner";
class Home extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { product, loading } = this.props.product;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <header
            className="jumbotron my-4"
            style={{
              backgroundColor: "rgb(70, 122, 97,0.6)",
            }}
          >
            <h1 className="display-3" style={{ color: "#fff" }}>
              A Warm Welcome!
            </h1>
            <p className="lead" style={{ color: "#fff" }}>
              <h4>To The Property Marketplace</h4>
              Changing the way you find property by providing more choice
            </p>
            <Link to="/about" className="btn btn-info btn-lg">
              Get To Know Us
            </Link>
          </header>
          <HomeCards />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/products"
                style={{ fontSize: 15, fontWeight: "bolder" }}
              >
                Properties
              </Link>
            </li>
          </ul>
          <div>
            <Scroller>
              {product === loading ? (
                <Spinner />
              ) : product === null || {} || [] ? (
                <h3>No Properties Found</h3>
              ) : (
                product.map((item, index) => {
                  if (index < 6) {
                    return (
                      <Item
                        key={index}
                        picture={item.main}
                        bedrooms={item.bed}
                        bathrooms={item.bath}
                        location={item.location}
                        doors={item.rooms}
                        price={item.price}
                        id={item._id}
                      />
                    );
                  }
                })
              )}
            </Scroller>
            <Link
              className="btn btn-lg btn-primary w-100"
              to="/products"
              style={{ fontSize: 15, fontWeight: "bolder" }}
            >
              View More Properties
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getItem: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { getProduct, getItem })(
  withRouter(Home)
);
