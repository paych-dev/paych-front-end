import React, {Fragment, Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Layout from './hoc/Layout';
import { Loader } from './components/Loader/Loader';

const Registration = lazy(() => import("./pages/Registration/Registration"));
const Login = lazy(() => import('./pages/Login/Login'));
const CreateChannel = lazy(() => import('./pages/CreateChannel/CreateChannel'));
const ClubPage = lazy(() => import('./pages/ChannelPage/ChannelPage'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Feed = lazy(() => import('./pages/Feed/Feed'));
const Channels = lazy(() => import("./pages/Channels/Channels"));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={ <Loader /> }>
          <Switch>
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path='/' component={Feed} />
            <PrivateRoute exact path='/own' component={Channels} />
            <PrivateRoute exact path='/subscribed' component={Channels} />
            <PrivateRoute exact path="/create" component={CreateChannel} />
            <PrivateRoute exact path="/channel/:id" component={ClubPage} />
            <PrivateRoute exact path='/profile' component={Profile} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
};

export default App;
