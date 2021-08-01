import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {routeList} from "./routes";
import {Layout} from "antd";

const { Content } = Layout;

export const App: React.FC<unknown> = () => {
  return (
    <BrowserRouter basename={'/'}>
          <Layout>
              <Content style={{ padding: '24px 48px', minHeight: '100vh' }}>
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
              </Content>
          </Layout>
    </BrowserRouter>
  );
};
