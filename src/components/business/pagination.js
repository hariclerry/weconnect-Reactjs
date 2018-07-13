import React, { Component } from "react";


const Pagination = ({ prevPage, nextPage, paginate }) => {
  let paginateLinks = [
    { name: "prev", page: prevPage },
    { name: "next", page: nextPage }
  ];

  return (
    <nav aria-label="Page navigation example" style={{ margin: "0 500px" }}>
      <ul className="pagination justify-content-center">
        {paginateLinks.map(obj => {
          return obj.page === null ? (
            <li key={obj.name} className="page-item">
              <button
                className="page-link"
                href=""
                name={obj.name + "Page"}
                style={{ color: "#E6E6E6" }}
                disabled
              >
                {obj.name}
              </button>
            </li>
          ) : (
            <li key={obj.name} className="page-item">
              <button
                className="page-link"
                href=""
                name={obj.name + "Page"}
                onClick={() => paginate(parseInt(obj.page, 10))}
              >
                {obj.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
