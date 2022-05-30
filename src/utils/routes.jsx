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
const Homepage = lazy(() => import('../pages/Homepage'))
const News = lazy(() => import('../pages/News'))
const PH = lazy(() => import('../pages/AboutDescription'))

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
      component: News,
    },
    {
      childPath: ROUTES.ACHIEVEMENTS,
      name: 'Achievements page',
      component: PH,
    },
    {
      childPath: ROUTES.GALLERY,
      name: 'Gallery page',
      component: PH,
    },
    {
      childPath: ROUTES.REPERTOIRE,
      name: 'Repertoire page',
      component: PH,
    },
    {
      childPath: ROUTES.CONTACT,
      name: 'Contact page',
      component: PH,
    },
  ],
}

// About routes
const AboutDescription = lazy(() => import('../pages/AboutDescription'))

const aboutRoutes = {
  id: 'AboutRoot',
  rootPath: ROUTES.ABOUT.ROOT,
  redirect: ROUTES.ABOUT.ROOT + ROUTES.ABOUT.CHILDREN.DESCRIPTION,
  children: [
    {
      childPath: ROUTES.ABOUT.CHILDREN.DESCRIPTION,
      name: 'About staff page',
      component: AboutDescription,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.STAFF,
      name: 'About description page',
      component: AboutDescription,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.RECRUITMENT,
      name: 'About recruitment page',
      component: AboutDescription,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.CV,
      name: 'About cv page',
      component: AboutDescription,
    },
  ],
}

export const routesList = [mainRoutes, aboutRoutes]
