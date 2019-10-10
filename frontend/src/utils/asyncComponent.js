import loadable from '@loadable/component';
import React from 'react';

const AsyncComponent = loadable(
  ({ path, page }) => {
    if (path === 'components') return import(`components/${page}`);
    return import(`pages/${page}`);
  },
  {
    fallback: <div>Loading...</div>,
  }
);

export default AsyncComponent;
