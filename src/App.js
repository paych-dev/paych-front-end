import React, {Fragment, Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout'
import Loader from './components/Loader/Loader'

const Registration = lazy(() => import("./pages/Registration/Registration"));
const MyClubs = lazy(() => import("./pages/MyClubs/MyClubs"));
const Login = lazy(() => import('./pages/Login/Login'))
const CreateClub = lazy(() => import('./pages/CreateClub/CreateClub'))
const ClubPage = lazy(() => import('./pages/ClubPage/ClubPage'))

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/myclubs" component={MyClubs} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/createclub" component={CreateClub} />
            <Route path="/club/:id" component={ClubPage} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
