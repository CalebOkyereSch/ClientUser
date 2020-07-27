import React, { Component } from "react";

export default class PropertySearch extends Component {
  render() {
    return (
      <div>
        <form action="/index.php" className="form-group">
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="type_id"
          >
            <option value="all">Type</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="rent">Rentals</option>
            <option value="buy">Buy</option>
          </select>
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="area_id"
            id="area_id"
          >
            <option value="all">Location</option>
            <option value="Accra">Accra</option>
            <option value="Kasoa">Kasoa</option>
            <option value="Legon">Legon</option>
            <option value="Kaneshi">Kaneshi</option>
            <option value="Kumasi">Kumasi</option>
            <option value="Madina">Madina</option>
            <option value="Teshie">Teshie</option>
            <option value="Tema">Tema</option>
          </select>{" "}
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="min_price"
            id="min-price"
          >
            <option value="0">Min. Price</option>
            <option value="100000">$100.000</option>
            <option value="200000">$200.000</option>
            <option value="250000">$250.000</option>
            <option value="300000">$300.000</option>
            <option value="350000">$350.000</option>
          </select>
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="max_price"
            id="max-price"
          >
            <option value="999999999">Max. Price</option>
            <option value="200000">$200.000 </option>
            <option value="250000">$250.000</option>
            <option value="300000">$300.000 </option>
            <option value="350000">$350.000</option>
            <option value="400000">$400.000 </option>
            <option value="450000">$450.000 </option>
          </select>
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            id="min_beds"
            name="min_beds"
          >
            <option value="all">Bedrooms</option>
            <option value="all">--</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
          </select>
          <select
            className="form-control"
            style={{ marginTop: "10px" }}
            name="min_baths"
            id="bathrooms"
          >
            <option value="all">Bathrooms</option>
            <option value="all">--</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
            <option value="6">+6</option>
            <option value="7">+7</option>
          </select>
          <button
            type="submit"
            class="btn btn-primary btn-sm"
            style={{ marginTop: "10px" }}
          >
            <i class="fa fa-search"></i> Search
          </button>
        </form>
      </div>
    );
  }
}
