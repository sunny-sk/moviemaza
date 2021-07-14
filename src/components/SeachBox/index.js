/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import classes from './SearchBox.module.scss';
const SearchBox = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearch(searchItem);
  };
  return (
    <>
      <br />
      <form onSubmit={onSubmitHandler}>
        <div className="container text-center">
          <div className="row">
            <div className={`col-xs-12 ${classes['col']}`}>
              <input
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="search Movie"
                type="text"
                name="searchMovieByName"
                className="form-control"
              />
            </div>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
