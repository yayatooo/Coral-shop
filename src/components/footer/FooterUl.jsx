import React from "react";

const FooterUl = ({ children }) => {
  return (
    <ul>
      <li className="mb-3">
        <a href="#">{children}</a>
      </li>
    </ul>
  );
};

export default FooterUl;
