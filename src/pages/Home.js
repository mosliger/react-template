import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connectRedux } from '../utils';
import { initApp } from '../actions/action';

const Home = (props) => {
  useEffect(() => {
    props.dispatch(initApp());
  }, []); // eslint-disable-line

  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapState = state => state;

export default connectRedux(mapState)(Home);
