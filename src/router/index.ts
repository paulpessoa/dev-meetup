import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/HomePage.vue'
import CreateMeetup from '../components/Meetup/CreateMeetup.vue'
import Meetup from '../components/Meetup/Meetup.vue'
import Profile from '../components/User/Profile.vue'
import Signin from '../components/User/Signin.vue'
import Signup from '../components/User/signup.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmeetup',
    name: 'createmeetup',
    component: CreateMeetup
  },
  {
    path: '/meetup',
    name: 'Meetup',
    component: Meetup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
