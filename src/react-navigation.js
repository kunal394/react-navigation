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
    return require('./navigators/createContainedStackNavigator').default;
  },
  get createUncontainedStackNavigator() {
    return require('./navigators/createStackNavigator').default;
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

  /**
   * Views
   */
  // Header
  get Header() {
    return require('./views/Header/Header').default;
  },
  get HeaderBackButton() {
    return require('./views/Header/HeaderBackButton').default;
  },
  get HeaderTitle() {
    return require('./views/Header/HeaderTitle').default;
  },
  get HeaderStyleInterpolator() {
    return require('./views/Header/HeaderStyleInterpolator').default;
  },

  // Stack
  get StackView() {
    return require('./views/StackView/StackView').default;
  },
  get StackViewCard() {
    return require('./views/StackView/StackViewCard').default;
  },
  get StackViewLayout() {
    return require('./views/StackView/StackViewLayout').default;
  },
  get StackViewStyleInterpolator() {
    return require('./views/StackView/StackViewStyleInterpolator').default;
  },
  get StackViewTransitionConfigs() {
    return require('./views/StackView/StackViewTransitionConfigs').default;
  },
  get createPointerEventsContainer() {
    return require('./views/StackView/createPointerEventsContainer').default;
  },

  // Transitioner
  get Transitioner() {
    return require('./views/Transitioner').default;
  },

  // SceneView
  get SceneView() {
    return require('./views/SceneView').default;
  },
  get ResourceSavingSceneView() {
    return require('./views/ResourceSavingSceneView').default;
  },

  // ScenesReducer
  get ScenesReducer() {
    return require('./views/ScenesReducer').default;
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
