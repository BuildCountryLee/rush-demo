import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:3000',
    container: '#reactContainer',
    activeRule: '/reactActiveRule',
  },
  {
    name: 'vue app',
    entry: '//localhost:8080',
    container: '#vueContainer',
    activeRule: '/vueActiveRule',
  },
]);

start();