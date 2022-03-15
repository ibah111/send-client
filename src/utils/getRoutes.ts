import React from "react";
import pages from "./pages";

export default function getRoutes() {
  const routes: any[] = [];
  pages.forEach((page) => {
    if (page?.root) {
      routes.push({
        Element: React.lazy(() => import(`../${page.root}/user`)),
        path: page.path,
        childrens: [
          {
            path: "admin",
            Element: React.lazy(() => import(`../${page.root}/admin`)),
          },
        ],
      });
    }
  });
  return routes;
}
