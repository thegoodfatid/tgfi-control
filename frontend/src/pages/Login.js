import React from 'react';
import AsyncComponent from 'utils/asyncComponent';

const Home = () => {
  return (
    <>
      <div>
        <AsyncComponent path="pages" page="Home" />
      </div>
      <div>
        <AsyncComponent path="pages" page="404" />
      </div>
    </>
  );
};

export default Home;
