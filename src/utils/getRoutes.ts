import React from 'react';
import pages from './pages';

interface PageRoute {
  Element: React.LazyExoticComponent<React.ComponentType>;
  path: string;
  childrens?: PageRoute[];
}

const EmptyAdminComponent: React.FC = () =>
  React.createElement('div', null, 'Административный интерфейс недоступен');

export default function getRoutes() {
  const routes: PageRoute[] = [];
  pages.forEach((page) => {
    if (page?.root) {
      routes.push({
        Element: React.lazy(() => import(`../${page.root}/user/index.tsx`)),
        path: page.path,
        childrens: [
          {
            path: 'admin',
            Element: React.lazy(() => {
              try {
                return import(`../${page.root}/admin/index.tsx`);
              } catch (e) {
                console.warn(
                  `Не удалось загрузить административный интерфейс для ${page.root}`,
                );
                return Promise.resolve({ default: EmptyAdminComponent });
              }
            }),
          },
        ],
      });
    }
  });
  return routes;
}
