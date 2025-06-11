import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
}

// Run the app in isolated mode, without run the main container
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// to run by the main container, he will cann the mount and render the app
export { mount };