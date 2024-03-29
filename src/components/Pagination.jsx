import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = totalProducts / productsPerPage;
  // Limit the page Numbers shown
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // GO to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    window.scrollTo(0, 0);
  };

  // GO to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    window.scrollTo(0, 0);
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Paginate>
      <ul className="paginate">
        <li
          onClick={paginatePrev}
          className={currentPage === pageNumbers[0] ? "hidden" : null}
        >
          Prev
        </li>

        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : null}
            >
              {number}
            </li>
          );
        })}

        <li
          onClick={paginateNext}
          className={
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? "hidden"
              : null
          }
        >
          Next
        </li>
      </ul>
      <p>
        <b className="page">{`page ${currentPage}`} </b>
        <span>of</span>
        <b> {`${Math.ceil(totalPages)}`}</b>
      </p>
    </Paginate>
  );
};

const Paginate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .paginate {
    list-style: none;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hidden {
    display: none;
  }

  li {
    font-size: 1rem;
    border: 1px solid #ccc;
    min-width: 3rem;
    height: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  p {
    margin-left: 1rem;
    margin-top: 1rem;
    .page {
      color: red;
    }
  }
  .active {
    background-color: red;
    color: var(--white);
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .paginate {
      list-style: none;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 2px solid #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hidden {
      display: none;
    }

    li {
      font-size: 0.8rem;
      border: 1px solid #ccc;
      min-width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    p {
      margin-left: 1rem;
      margin-top: 1rem;
      .page {
        color: red;
      }
    }
    .active {
      background-color: red;
      color: var(--white);
    }
  }
`;
export default Pagination;
