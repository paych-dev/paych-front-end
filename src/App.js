import React, {Fragment, Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout'
import Loader from './components/Loader/Loader'

const Registration = lazy(() => import("./pages/Registration/Registration"));
const MyClubs = lazy(() => import("./pages/MyClubs/MyClubs"));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/myclubs" component={MyClubs} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
