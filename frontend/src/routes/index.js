import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AsyncComponent from 'utils/asyncComponent';

// import Loader from './components/Loader';
// import { isAuthenticated, isNotAuthenticated } from './utils/authenticationRedirects';

// const Loading = props => {
//   if (props.error) {
//     return (
//       <div>
//         Error! <button onClick={props.retry}>Retry</button>
//       </div>
//     );
//   } else if (props.pastDelay) {
//     return <Loader />;
//   } else {
//     return null;
//   }
// };

// const App = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={isAuthenticated(AsyncHome)} />
//       <Route exact path="/login" component={isNotAuthenticated(AsyncLogin)} />
//       <Route exact path="/dashboard" component={isAuthenticated(AsyncDashboard)} />
//       <Route exact path="/dashboard2" component={isAuthenticated(AsyncDashboard2)} />
//       <Route exact path="/loading" component={AsyncLoading} />
//       <Route component={AsyncNotFound} />
//     </Switch>
//   );
// };

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AsyncComponent path="pages" page="Home" />
      </Route>
      <Route exact path="/login">
        <AsyncComponent path="pages" page="Login" />
      </Route>
      <Route>
        <AsyncComponent path="pages" page="404" />
      </Route>
    </Switch>
  );
};

export default App;
