/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.useFakeTimers();

test('renders the Zouj auth flow instead of the default React Native screen', async () => {
  let renderer!: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
  });

  expect(JSON.stringify(renderer.toJSON())).toContain('ZOUJ');
  expect(JSON.stringify(renderer.toJSON())).not.toContain('Welcome to React Native');

  await ReactTestRenderer.act(async () => {
    jest.runOnlyPendingTimers();
  });

  expect(JSON.stringify(renderer.toJSON())).toContain('Create Account');

  await ReactTestRenderer.act(async () => {
    renderer.unmount();
  });
});
