import React, {Fragment, Suspense, lazy} from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './hoc/Layout'
import MyClubs from "./pages/MyClubs/MyClubs";

const Registration = lazy(() => import("./pages/Registration/Registration"));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<div>Loading . . . </div>}>
          <Switch>
            <Route exact path="/" component={MyClubs} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
