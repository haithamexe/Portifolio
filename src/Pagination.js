import "./pagination.css";
import React from "react";

export default function Pagination(props) {
  const { activePage, setActivePage } = props;
  return (
    <div className="pagination">
      <div
        className={activePage === 1 ? "active" : "non-active"}
        onClick={() => {
          setActivePage(1);
        }}
      ></div>
      <div
        className={activePage === 2 ? "active" : "non-active"}
        onClick={() => {
          setActivePage(2);
        }}
      ></div>
      <div
        className={activePage === 3 ? "active" : "non-active"}
        onClick={() => {
          setActivePage(3);
        }}
      ></div>
    </div>
  );
}
