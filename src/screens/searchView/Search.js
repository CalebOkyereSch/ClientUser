import React, { Component } from "react";
import Item from "../../component/widget/Item";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    const { search } = this.props.search;

    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          {search === null ? (
            <h1>No Search Found</h1>
          ) : (
            search.map((item, index) => {
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
        <Footer />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  search: state.search,
});

export default connect(mapStateToProp, {})(Search);
