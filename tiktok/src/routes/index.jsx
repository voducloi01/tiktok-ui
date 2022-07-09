import HeaderOnly from '~/components/Layout/HederOnly';
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/follwing', component: Follwing },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
