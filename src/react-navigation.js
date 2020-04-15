/* eslint global-require: 0 */

module.exports = {
  // Core
  get createNavigationContainer() {
    return require('./createNavigationContainer').default;
  },
  get StateUtils() {
    return require('./StateUtils').default;
  },
  get getNavigation() {
    return require('./getNavigation').default;
  },

  // Navigators
  get createNavigator() {
    return require('./navigators/createNavigator').default;
  },
  get createKeyboardAwareNavigator() {
    return require('./navigators/createKeyboardAwareNavigator').default;
  },
  get NavigationProvider() {
    return require('./views/NavigationContext').default.NavigationProvider;
  },
  get NavigationConsumer() {
    return require('./views/NavigationContext').default.NavigationConsumer;
  },
  get createStackNavigator() {
    return require('react-navigation-stack').createStackNavigator;
  },

  // Actions
  get NavigationActions() {
    return require('./NavigationActions').default;
  },
  get StackActions() {
    return require('./routers/StackActions').default;
  },

  // Routers
  get StackRouter() {
    return require('./routers/StackRouter').default;
  },
  get createConfigGetter() {
    return require('./routers/createConfigGetter').default;
  },
  get getScreenForRouteName() {
    return require('./routers/getScreenForRouteName').default;
  },
  get validateRouteConfigMap() {
    return require('./routers/validateRouteConfigMap').default;
  },

  // Utils
  get getActiveChildNavigationOptions() {
    return require('./utils/getActiveChildNavigationOptions').default;
  },
  get pathUtils() {
    return require('./routers/pathUtils').default;
  },

  // Views
  get Transitioner() {
    return require('react-navigation-stack').Transitioner;
  },
  get StackView() {
    return require('react-navigation-stack').StackView;
  },
  get StackViewCard() {
    return require('react-navigation-stack').StackViewCard;
  },
  get StackViewTransitionConfigs() {
    return require('react-navigation-stack').StackViewTransitionConfigs;
  },
  get SceneView() {
    return require('./views/SceneView').default;
  },
  get ResourceSavingSceneView() {
    return require('./views/ResourceSavingSceneView').default;
  },

  // Header
  get Header() {
    return require('react-navigation-stack').Header;
  },
  get HeaderTitle() {
    return require('react-navigation-stack').HeaderTitle;
  },
  get HeaderBackButton() {
    return require('react-navigation-stack').HeaderBackButton;
  },
  get HeaderStyleInterpolator() {
    return require('react-navigation-stack').HeaderStyleInterpolator;
  },

  // HOCs
  get withNavigation() {
    return require('./views/withNavigation').default;
  },
  get withNavigationFocus() {
    return require('./views/withNavigationFocus').default;
  },
  get withOrientation() {
    return require('./views/withOrientation').default;
  },
};
