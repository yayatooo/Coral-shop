import React from "react";

export default function FooterHead() {
  return (
    <div className="w-3/12">
      <img src="./logo.svg" />
      <p className="py-8 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div>
        <ul className="flex gap-8">
          <li>
            <img src="./facebook-icon.svg" />
          </li>
          <li>
            <img src="./twitter-icon.svg" />
          </li>
          <li>
            <img src="./linkedin-icon.svg" />
          </li>
          <li>
            <img src="./instagram-icon.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
