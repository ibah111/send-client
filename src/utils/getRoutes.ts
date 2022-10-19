import React from 'react';
import pages from './pages';
interface PageRoute {
  Element: React.LazyExoticComponent<React.ComponentType>;
  path: string;
  childrens?: PageRoute[];
}
export default function getRoutes() {
  const routes: PageRoute[] = [];
  pages.forEach((page) => {
    if (page?.root) {
      routes.push({
        Element: React.lazy(() => import(`../${page.root}/user`)),
        path: page.path,
        childrens: [
          {
            path: 'admin',
            Element: React.lazy(() => import(`../${page.root}/admin`)),
          },
        ],
      });
    }
  });
  return routes;
}
