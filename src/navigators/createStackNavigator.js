import createKeyboardAwareNavigator from '../navigators/createKeyboardAwareNavigator';
import createNavigator from '../navigators/createNavigator';
import StackRouter from '../routers/StackRouter';
import StackView from '../views/StackView/StackView';

function createStackNavigator(routeConfigMap, stackConfig = {}) {
  const {
    initialRouteKey,
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
    disableKeyboardHandling,
    getCustomActionCreators,
  } = stackConfig;

  const stackRouterConfig = {
    initialRouteKey,
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
    getCustomActionCreators,
  };

  const router = StackRouter(routeConfigMap, stackRouterConfig);

  // Create a navigator with StackView as the view
  let Navigator = createNavigator(StackView, router, stackConfig);
  if (!disableKeyboardHandling) {
    Navigator = createKeyboardAwareNavigator(Navigator, stackConfig);
  }

  return Navigator;
}

export default createStackNavigator;
