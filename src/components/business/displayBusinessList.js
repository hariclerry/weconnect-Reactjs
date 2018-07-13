import React from "react";
import { Link } from "react-router-dom";

import "static/css/bootstrap.min.css";

const BusinessLists = ({ business }) => {
  
  return (
    <tr key={business.id}>
      <td>{business.name}</td>
      <td>{business.category}</td>
      <td>{business.location}</td>
      <td>{business.description}</td>
      <td>
        <Link
          to={`/addreview/${business.id}`}
          className="btn btn-info"
          role="button"
          style={{ marginRight: "20px" }}
        >
          Review
        </Link>
      </td>
    </tr>
  );
};

export default BusinessLists;
