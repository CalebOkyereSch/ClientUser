import React from "react";
import { Link } from "react-router-dom";
function HomeCards() {
  return (
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Who We Are </h4>
          <div className="card-body">
            <p className="card-text">
              We are an affordable consumer-friendly website which gives you
              everything you need to take control of selling or renting your
              property.
            </p>
          </div>
          <div className="card-footer">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">What We Do</h4>
          <div className="card-body">
            <p className="card-text">
              We help you save money selling or letting property, whether you’re
              an estate agent, landlord or homeowner, we have a range of
              services tailored to your needs. We advertise all our properties
              on a network of prominent websites, putting your listings in front
              of tens of thousands of buyers and tenants every day.
            </p>
          </div>
          <div className="card-footer">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Why Work with Us</h4>
          <div className="card-body">
            <p className="card-text">
              We also offer a range of services to take care of all our
              landlords needs. From tenant referencing services to ensure you
              find the best possible tenants, to customisable tenancy
              agreements, landlord insurance products, debt recovery assistance
              and much more.
            </p>
          </div>
          <div className="card-footer">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
