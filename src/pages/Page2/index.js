import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style';

const Page2 = () => {
  return (
    <Style>
      <h1>Page 2</h1>
      <Link to="/">HOME</Link>
    </Style>
  );
};

export default Page2;
