import React from "react"
import {
  Route,
  Switch
} from "react-router-dom";


export default class AppRouter extends React.Component {
  static defaultProps = {
    routes: []
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { routes } = this.props
    return (
      <Switch>
        {routes.map(this.creatRoute)}
      </Switch>
              
    )
  }

  creatRoute = (routeConfig, i) => {
    const { key = i, path, exact, component: Comp, params } = routeConfig
    return (
      <Route
        key={key}
        exact={exact}
        path={path}
        render={props => <Comp {...props} params={params} />}
      />
    )
  }

}