import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <Searchbar>
      <div className="search">
        <input
          type="text"
          placeholder="search by name or category"
          value={value}
          onChange={onChange}
        />
        <BiSearch size={15} className="searchIcon" />
      </div>
    </Searchbar>
  );
};

const Searchbar = styled.div`
  margin: 5px 0;
  position: relative;
  flex: 1;
  .search {
    display: flex;
    align-items: center;
    position: relative;
  }
  .searchIcon {
    position: absolute;
    left: 0.7rem;
  }
  input[type="text"] {
    display: block;
    font-size: 0.8rem;
    font-weight: 300;
    padding: 0.5rem 0rem 0.5rem 2rem;
    margin: 1rem auto;
    width: 20rem;
    border: 1px solid #777;
    border-radius: 0.5rem;
    outline: none;
    background: none;
  }
  input::placeholder {
    margin: 0 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Search;
