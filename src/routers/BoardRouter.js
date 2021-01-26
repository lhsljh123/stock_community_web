import loadable from "@loadable/component"
import React from "react"
import { Route, Switch } from "react-router-dom"
import Page from "../components/atoms/Page"


const ArticleList = loadable(() => import("../pages/Board.js"));
const ArticleView = loadable(() => import("../pages/BoardView.js"));

const BoardRoutes = ({ match }) => {
  return (
    <Page>
      <Switch>
        <Route path={`${match.path}/:id`} component={ArticleView} />
        <Route path={`${match.path}/`} component={ArticleList} />
      </Switch>
    </Page>
  )
}


export default BoardRoutes