import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/HomePage.vue'
import NewMeetup from '../components/Meetups/NewMeetup.vue'
import MeetupList from '../components/Meetups/MeetupList.vue'
import MeetupSingle from '../components/Meetups/MeetupSingle.vue'
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
    path: '/meetups',
    name: 'MeetupList',
    component: MeetupList
  },
  {
    path: 'meetups/new-meetup',
    name: 'NewMeetup',
    component: NewMeetup
  },
  {
    path: '/meetups/:id',
    name: 'MeetupSingle',
    component: MeetupSingle
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
