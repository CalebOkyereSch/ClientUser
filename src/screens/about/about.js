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
          <a className="btn btn-outline-secondary" href="#contact">
            Contacts
          </a>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

      {/*  */}
      <div class="container pt-4 pb-4 text-center" id="contact">
        <h2 class="text-center mb-4">Contacts</h2>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fas fa-4x fa-map-marker-alt mt-4 mb-4 text-muted "></i>
              <h4>Location</h4>

              <a href="#" style={{ display: "block" }}>
                <i className="fas fa-thumbtack"></i> Madina <br />
                <small className="text-muted">Oppsite Overhead</small>
              </a>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-4x fa-mobile mt-4 mb-4 text-muted"></i>
              <h4>Telephone</h4>

              <a href="#" style={{ display: "block" }}>
                <i class="fas fa-phone-volume"></i> +(233)567423295
              </a>
              <a href="#" style={{ display: "block" }}>
                <i class="fas fa-phone-volume"></i> +(233)267423295
              </a>
            </div>
          </div>
          <div class="clearfix visible-sm"></div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fas fa-4x fa-thumbs-up  mt-4 mb-4 text-muted"></i>
              <h4>Socials</h4>
              <a href="#" style={{ display: "block" }}>
                <i class="fas fa-envelope"></i> hemightproperty@gmail.com
              </a>
              <a href="#" style={{ display: "block" }}>
                <i class="fab fa-twitter"></i> @HemightProperties
              </a>
              <a href="#" style={{ display: "block" }}>
                <i class="fab fa-facebook"></i> @HemightProperties
              </a>
              <a href="#" style={{ display: "block" }}>
                <i class="fab fa-instagram"></i> @HemightProperties
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
