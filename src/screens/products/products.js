import React, { Component } from "react";
import Item from "../../component/widget/Item";
import Carousel from "../../component/widget/Carousel";
import { withRouter } from "react-router-dom";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { getProduct } from "../../actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../component/widget/Spinner";
import PropertySearch from "../../component/widget/PropertySearch";
import isEmpty from "../../isEmpty";
class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  constructor() {
    super();
    this.state = {
      things: false,
    };
  }
  showProduct = (product, loading) => {
    return (
      <div className="container-fluid">
        <Carousel />
        <div className="row">
          {product === loading ? (
            <Spinner />
          ) : isEmpty(product) ? (
            <h1>No Product Found</h1>
          ) : (
            product.map((item, index) => {
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
            })
          )}
        </div>
        <div className="row"></div>
      </div>
    );
  };

  render() {
    const { product, loading } = this.props.product;
    const { search } = this.props.search;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="my-4">Our Properties </h1>

              <h6
                style={{ fontSize: "13px", color: "#f00", textAlign: "center" }}
              >
                {this.state.things ? "Search Item Not Available" : ""}
              </h6>
              <div className="list-group">
                <PropertySearch />
              </div>
            </div>
            {search ? (
              search === loading ? (
                <div className="col-lg-9">
                  <div className="row">
                    <Spinner />
                  </div>
                </div>
              ) : isEmpty(search) ? (
                <div className="col-lg-9">
                  {this.showProduct(product, loading)}
                </div>
              ) : (
                <div className="col-lg-9">
                  <div className="row">
                    {search.map((item, index) => {
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
                    })}
                  </div>
                </div>
              )
            ) : (
              <div className="col-lg-9">
                <Carousel />
                <div className="row">
                  {product === loading ? (
                    <Spinner />
                  ) : isEmpty(product) ? (
                    <h1>No Product Found</h1>
                  ) : (
                    product.map((item, index) => {
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
                    })
                  )}
                </div>
                <div className="row"></div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  product: state.product,
  auth: state.auth,
  errors: state.errors,
  search: state.search,
});

export default connect(mapStateToProp, { getProduct })(withRouter(Product));
