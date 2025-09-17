import HotelRoom from '@/components/HotelRoom.vue'
import Homepage from '../components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Facilities from '@/components/Facilities.vue'
import ContactUs from '@/components/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Homepage },
    { path: '/rooms', component: HotelRoom },
    { path: '/facilities', component: Facilities },
    { path: '/contact', component: ContactUs },
  ],
})

export default router
