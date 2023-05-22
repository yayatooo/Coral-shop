import React from "react";
import FooterHead from "./FooterHead";
import FooterLink from "./FooterLink";
import FooterUl from "./FooterUl";

const FooterContainer = () => {
  return (
    <>
      <div className="w-10/12 mx-auto p-16 flex justify-between">
        <FooterHead />
        <div className="w-2/12">
          <FooterLink>Catalog</FooterLink>
          <FooterUl>Electronics</FooterUl>
          <FooterUl>Men's Clothes</FooterUl>
          <FooterUl>Women's Clothes</FooterUl>
          <FooterUl>Jewelery</FooterUl>
        </div>
        <div className="w-2/12">
          <FooterLink>About us</FooterLink>
          <FooterUl>Our Producers</FooterUl>
          <FooterUl>Site Map</FooterUl>
          <FooterUl>FaQ</FooterUl>
          <FooterUl>Term & Condition</FooterUl>
        </div>
        <div className="w-2/12">
          <FooterLink>Customer Service</FooterLink>
          <FooterUl>Contact Us</FooterUl>
          <FooterUl>Track Your Order</FooterUl>
          <FooterUl>Product & care</FooterUl>
          <FooterUl>Shipping Returns</FooterUl>
        </div>
      </div>
    </>
  );
};

export default FooterContainer;
