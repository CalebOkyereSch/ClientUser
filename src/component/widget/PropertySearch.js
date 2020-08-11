import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { classicSearch } from "../../actions/searchActions";
class PropertySearch extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      minPrice: "",
      maxPrice: "",
      bed: "",
      bath: "",
      rooms: "",
      status: "",
      type: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const productSearch = {
      type: this.state.type,
      location: this.state.location,
      status: this.state.status,
      bed: this.state.bed,
      rooms: this.state.rooms,
      bath: this.state.bath,
      maxPrice: this.state.maxPrice,
      minPrice: this.state.minPrice,
    };
    this.props.classicSearch(productSearch);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <form className="form-group" onSubmit={this.onSubmit}>
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="status"
            onChange={this.onChange}
          >
            <option value="">Status</option>
            <option value="Rent">Rentals</option>
            <option value="Buy">Buy</option>
          </select>
          {errors.status ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.status}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="type"
            onChange={this.onChange}
          >
            <option value="">Type</option>
            <option value="Housing">Housing</option>
            <option value="Land">Land</option>
            <option value="Apartment">Apartment</option>
          </select>
          {errors.type ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.type}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="location"
            onChange={this.onChange}
          >
            <option value="">Location</option>
            <option value="Accra">Accra</option>
            <option value="Kasoa">Kasoa</option>
            <option value="Legon">Legon</option>
            <option value="Kaneshi">Kaneshi</option>
            <option value="Kumasi">Kumasi</option>
            <option value="Madina">Madina</option>
            <option value="Teshie">Teshie</option>
            <option value="Tema">Tema</option>
          </select>{" "}
          {errors.location ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.location}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="minPrice"
            onChange={this.onChange}
          >
            <option value="0">Min. Price</option>
            <option value="100000">$100.000</option>
            <option value="200000">$200.000</option>
            <option value="250000">$250.000</option>
            <option value="300000">$300.000</option>
            <option value="350000">$350.000</option>
          </select>
          {errors.minPrice ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.minPrice}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="maxPrice"
            onChange={this.onChange}
          >
            <option value="999999999999">Max. Price</option>
            <option value="200000">$200.000 </option>
            <option value="250000">$250.000</option>
            <option value="300000">$300.000 </option>
            <option value="350000">$350.000</option>
            <option value="400000">$400.000 </option>
            <option value="450000">$450.000 </option>
          </select>
          {errors.maxPrice ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.maxPrice}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="rooms"
            onChange={this.onChange}
          >
            <option value="">Rooms</option>
            <option value="">--</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
          </select>
          {errors.rooms ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.rooms}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="bed"
            onChange={this.onChange}
          >
            <option value="">Bedrooms</option>
            <option value="">--</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
          </select>
          {errors.bed ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.bed}
            </div>
          ) : (
            ""
          )}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="bath"
            onChange={this.onChange}
          >
            <option value="">Bathrooms</option>
            <option value="">--</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
          </select>
          {errors.bath ? (
            <div
              style={{ color: "red", textAlign: "center", fontSize: "11px" }}
            >
              {errors.bath}
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            style={{ marginTop: "10px" }}
            onClick={() => this.props.something}
          >
            Search
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

PropertySearch.propTypes = {
  errors: PropTypes.object.isRequired,
  classicSearch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { classicSearch })(
  withRouter(PropertySearch)
);
