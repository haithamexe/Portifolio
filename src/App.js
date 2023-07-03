import Spline from "@splinetool/react-spline";
import { React, useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
import "./index.css";

export default function App() {
  const [page, setPage] = useState(1);
  const prevPage = useRef(0);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
  }, []);

  function handlePageChange(index) {
    setPage(index);
  }
  function handleScroll(obj) {
    window.removeEventListener("wheel", handleScroll);
    // console.log(obj);
    // console.log(obj.deltaY);
    console.log(prevPage.current);
    // console.log(prevPage);

    if (obj.deltaY < 0) {
      if (prevPage.current > 0) {
        prevPage.current -= 1;
        setPage(prevPage.current + 1);
      }
    } else if (obj.deltaY > 0) {
      if (prevPage.current < 2) {
        prevPage.current += 1;
        setPage(prevPage.current + 1);
      }
    }

    setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
    }, 4000);
  }
  return (
    <div>
      {page === 1 && (
        <Spline
          className="fade-in block"
          scene="https://prod.spline.design/SeykCfNyFMLatZR3/scene.splinecode"
        />
      )}
      {page === 2 && (
        <Spline
          className="fade-in block"
          scene="https://prod.spline.design/DkIFBUqb6LumBG49/scene.splinecode"
        />
      )}
      {page === 3 && (
        <Spline
          className="fade-in block"
          scene="https://prod.spline.design/gZ7tWhlPQhM3xblS/scene.splinecode"
        />
      )}
      <Pagination activePage={page} setActivePage={handlePageChange} />
    </div>
  );
}
