import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import withOrientation, { isOrientationLandscape } from '../withOrientation';

test('it adds isLandscape to props', () => {
  const WrappedComponent = withOrientation(View);
  console.error(withOrientation(View).prototype.toSource());
  const rendered = create(<WrappedComponent />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('calculates orientation correctly', () => {
  const isLandscape = isOrientationLandscape({ width: 10, height: 1 });
  expect(isLandscape).toBeTruthy();
});
