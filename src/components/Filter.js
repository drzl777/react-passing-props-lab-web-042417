import React, { Component } from 'react';

const Filter = (props) => {

    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}

Filter.defaultProps = {
  filters: [],
  handleChange: (event) => console.log(event)
}

export default Filter;
