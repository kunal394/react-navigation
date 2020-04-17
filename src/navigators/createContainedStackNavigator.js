import createStackNavigator from './createStackNavigator';
import createNavigationContainer from '../createNavigationContainer';

const createContainedStackNavigator = (routeConfigs, config = {}) => {
  const navigator = createStackNavigator(routeConfigs, config);
  return createNavigationContainer(navigator);
};

export default createContainedStackNavigator;
