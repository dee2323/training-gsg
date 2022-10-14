import React, { Component } from "react";
import "./footerStyle.css";
import '../../index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {" "}
        <ul className="list-1">
          {" "}
          <li>Categories</li> <li>Partners</li> <li>Contact us </li>{" "}
          <li>Subscribe to newsletter</li>{" "}
        </ul>{" "}
        <ul className="list-1 list-2">
          {" "}
          <li>
            {" "}
            About us <br /> Testimonials <br /> Contact <br /> Journal <br />{" "}
            Privacy Policy{" "}
          </li>{" "}
          <li>
            {" "}
            Support <br /> Shipping & Returns <br /> Size Guide <br /> Product
            Care <br />{" "}
          </li>{" "}
          <li>
            {" "}
            26A Pagoda St, TANGS,
            <br /> Singapore, 058187 <br /> <br /> <br /> +65 6221 5462{" "}
          </li>{" "}
          <li>
            {" "}
            <input
              type="text"
              class="email"
              placeholder="Enter your email"
            />{" "}
            <input type="submit" value="Subscribe" class="submit" />{" "}
          </li>{" "}
        </ul>{" "}
        <div>© Copyright Matter PTE LTD 2017</div>{" "}
      </div>
    );
  }
}
