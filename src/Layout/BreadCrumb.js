import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ link, title, href }) {
  //Home, Link, Title
  //props for my link
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>

        {link ? (
          <li className="breadcrumb-item">
            <Link to={href}> {link} </Link>
          </li>
        ) : null}

        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
