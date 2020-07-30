import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">About Us</h1>
          <p className="lead font-weight-normal">
            We are an experienced real estate agency, established since 2004 in
            Madina, the principal tourist town east of Ghana. During that time
            we have sold a range of properties to clients from all over Accra
            and beyond. The owner is Hemight Properties And Construction. Our
            main office is at Madina. Together with our sales team, we will be
            delighted to bring our experience to bear in making your purchase or
            rental experience a satisfying and fulfilling one.
          </p>
          <Link className="btn btn-outline-secondary" to="#contact">
            Contacts
          </Link>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

      {/*  */}
      <div className="container pt-4 pb-4 text-center" id="contact">
        <h2 className="text-center mb-4">Contacts</h2>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="feature-item animated fadeInUp delay-3">
              <i className="fas fa-4x fa-map-marker-alt mt-4 mb-4 text-muted "></i>
              <h4>Location</h4>

              <Link to="#" style={{ display: "block" }}>
                <i className="fas fa-thumbtack"></i> Madina <br />
                <small className="text-muted">Oppsite Overhead</small>
              </Link>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="feature-item animated fadeInUp delay-3">
              <i className="fa fa-4x fa-mobile mt-4 mb-4 text-muted"></i>
              <h4>Telephone</h4>

              <Link to="#" style={{ display: "block" }}>
                <i className="fas fa-phone-volume"></i> +(233)567423295
              </Link>
              <Link to="#" style={{ display: "block" }}>
                <i className="fas fa-phone-volume"></i> +(233)267423295
              </Link>
            </div>
          </div>
          <div className="clearfix visible-sm"></div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="feature-item animated fadeInUp delay-3">
              <i className="fas fa-4x fa-thumbs-up  mt-4 mb-4 text-muted"></i>
              <h4>Socials</h4>
              <Link to="#" style={{ display: "block" }}>
                <i className="fas fa-envelope"></i> hemightproperty@gmail.com
              </Link>
              <Link to="#" style={{ display: "block" }}>
                <i className="fab fa-twitter"></i> @HemightProperties
              </Link>
              <Link to="#" style={{ display: "block" }}>
                <i className="fab fa-facebook"></i> @HemightProperties
              </Link>
              <Link to="#" style={{ display: "block" }}>
                <i className="fab fa-instagram"></i> @HemightProperties
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
