import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const mount = (el) => {
  ReactDOM.render(
    <App />, el
  );
}

// Run the app in isolated mode, without run the main container
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// to run by the main container, he will cann the mount and render the app
export { mount };