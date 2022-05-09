import { lazy } from 'react'

export const ROUTES = {
  HOMEPAGE: '/',
  ABOUT: {
    ROOT: '/about',
    CHILDREN: {
      DESCRIPTION: '/choir',
      CV: '/cv',
      RECRUITMENT: '/recruitment',
      STAFF: '/staff',
    },
  },
  NEWS: '/news',
  ACHIEVEMENTS: '/achievements',
  GALLERY: '/gallery',
  REPERTOIRE: '/repertoire',
  CONTACT: '/contact',
}

// Main components
const Homepage = lazy(() => import('../features/Homepage/App'))

// Main routes
const mainRoutes = {
  id: 'MainRoot',
  rootPath: ROUTES.HOMEPAGE,
  component: Homepage,
  // guard: HasToBeAuthenticated,
  children: [
    {
      childPath: ROUTES.NEWS,
      name: 'News page',
      component: Homepage,
    },
    {
      childPath: ROUTES.ACHIEVEMENTS,
      name: 'Achievements page',
      component: Homepage,
    },
    {
      childPath: ROUTES.GALLERY,
      name: 'Gallery page',
      component: Homepage,
    },
    {
      childPath: ROUTES.REPERTOIRE,
      name: 'Repertoire page',
      component: Homepage,
    },
    {
      childPath: ROUTES.CONTACT,
      name: 'Contact page',
      component: Homepage,
    },
  ],
}

// About routes
const aboutRoutes = {
  id: 'AboutRoot',
  rootPath: ROUTES.ABOUT.ROOT,
  redirect: ROUTES.ABOUT.ROOT + ROUTES.ABOUT.CHILDREN.DESCRIPTION,
  children: [
    {
      childPath: ROUTES.ABOUT.CHILDREN.DESCRIPTION,
      name: 'About staff page',
      component: Homepage,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.STAFF,
      name: 'About description page',
      component: Homepage,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.RECRUITMENT,
      name: 'About recruitment page',
      component: Homepage,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.CV,
      name: 'About cv page',
      component: Homepage,
    },
  ],
}

export const routesList = [mainRoutes, aboutRoutes]
