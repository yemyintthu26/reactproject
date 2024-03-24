import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const Home = React.lazy(() => import('./views/menus/home/Home'));
const Second = React.lazy(() => import('./views/menus/second/Second'));
const Result = React.lazy(() => import('./views/menus/home/Result'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/menus/Home`, name: 'Home1', component: Home},
  { path: `/menus/Second`, name: 'Home1', component: Second},
  { path: `/menus/Result`, name: 'Result', component: Result},
];

export default routes;



