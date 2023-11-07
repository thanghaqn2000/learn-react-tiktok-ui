import Home from '~/components/GlobalStyles/pages/Home';
import Following from '~/components/GlobalStyles/pages/Following';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
