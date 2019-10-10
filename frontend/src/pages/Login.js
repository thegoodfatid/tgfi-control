import { Button } from 'antd';
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
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </>
  );
};

export default Home;
