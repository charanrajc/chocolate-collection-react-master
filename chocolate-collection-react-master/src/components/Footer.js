import React from 'react'
import './Footer.css'

const Footer = (props) => (
  <footer>
    <div className="row">
      <section className="col-md-4">
        <header><h2>Social Links</h2></header>
        <div>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Google Plus</p>
        </div>
      </section>
      <section className="col-md-4">
        <header><h2>About Us</h2></header>
        <div>
          <p>MEDIA</p>
          <p>Investors</p>
          <p>Career</p>
          <p>Sustainability</p>
        </div>
      </section>
      <section className="col-md-4">
        <header><h2>Our Chocolates</h2></header>
        <div>
          <p>Our Chocolates</p>
          <p>Creation</p>
          <p>Excellence</p>
          <p>Lindor</p>
          <p>Hello</p>
          <p>Assortment</p>
          <p>Christmas</p>
          <p>Easter</p>
        </div>
      </section>
    </div>
  </footer>
);


export default Footer