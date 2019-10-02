import React, {Fragment, Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Layout from './hoc/Layout';
import Loader from './components/Loader/Loader';

const SubscribedChannels = lazy(() => import("./pages/SubscribedChannels/SubscribedChannels"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const OwnChannels = lazy(() => import("./pages/OwnChannels/OwnChannels"));
const Login = lazy(() => import('./pages/Login/Login'));
const CreateClub = lazy(() => import('./pages/CreateClub/CreateClub'));
const ClubPage = lazy(() => import('./pages/ClubPage/ClubPage'));
const Profile = lazy(() => import('./pages/Profile/Profile'))
const Feed = lazy(() => import('./pages/Feed/Feed'))
const Channels = lazy(() => import("./pages/Channels/Channels"));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            {/* <PrivateRoute exact path="/subscribed" component={SubscribedChannels} />
            <PrivateRoute exact path="/own" component={OwnChannels} /> */}
            <PrivateRoute exact path='/' component={Feed} />
            <PrivateRoute exact path='/channels' component={Channels} />
            <PrivateRoute exact path="/create_channel" component={CreateClub} />
            <PrivateRoute exact path="/channel/:id" component={ClubPage} />
            <PrivateRoute exact path='/profile' component={Profile} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
