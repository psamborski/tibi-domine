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
const Repertoire = lazy(() => import('../pages/Repertoire'))
const Achievements = lazy(() => import('../pages/Achievements'))
const Gallery = lazy(() => import('../pages/Gallery'))
const Contact = lazy(() => import('../pages/Contact'))

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
      component: Achievements,
    },
    {
      childPath: ROUTES.GALLERY,
      name: 'Gallery page',
      component: Gallery,
    },
    {
      childPath: ROUTES.REPERTOIRE,
      name: 'Repertoire page',
      component: Repertoire,
    },
    {
      childPath: ROUTES.CONTACT,
      name: 'Contact page',
      component: Contact,
    },
  ],
}

// About components
const AboutDescription = lazy(() => import('../pages/AboutDescription'))
const AboutStaff = lazy(() => import('../pages/AboutStaff'))
const AboutCv = lazy(() => import('../pages/AboutCv'))
const AboutRecruitment = lazy(() => import('../pages/AboutRecruitment'))

// About routes
const aboutRoutes = {
  id: 'AboutRoot',
  rootPath: ROUTES.ABOUT.ROOT,
  redirect: ROUTES.ABOUT.ROOT + ROUTES.ABOUT.CHILDREN.DESCRIPTION,
  children: [
    {
      childPath: ROUTES.ABOUT.CHILDREN.DESCRIPTION,
      name: 'About description page',
      component: AboutDescription,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.STAFF,
      name: 'About STAFF page',
      component: AboutStaff,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.RECRUITMENT,
      name: 'About recruitment page',
      component: AboutRecruitment,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.CV,
      name: 'About cv page',
      component: AboutCv,
    },
  ],
}

export const routesList = [mainRoutes, aboutRoutes]
