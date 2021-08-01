import React, { useEffect } from 'react';
import { advertisements_getAll } from '../services/http/mainApi';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {routeList} from "./routes";

export const App: React.FC<unknown> = () => {
  const getAdvertisements = async () => {
    const res = await advertisements_getAll();
    console.log(res);
  };

  useEffect(() => {
    getAdvertisements();
  }, []);

  return (
    <BrowserRouter basename={'/'}>
      <Switch>
        {
          routeList.map(({ path, Component }) => {
            return <Route key={path} exact path={path}>
              {({ match }) => {
                return (
                    // @ts-ignore
                    <Component />
                )
              }}
            </Route>
          })
        }
      </Switch>
    </BrowserRouter>
  );
};
