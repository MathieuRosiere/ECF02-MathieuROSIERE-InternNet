import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CompanyForm from '@/views/CompanyForm.vue'
import DisplayCompanies from '@/views/DisplayCompanies.vue'
import Internship from '@/views/Internship.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: "/formulaire",
      name: 'formulaire',
      component: CompanyForm
    },
    {
      path: "/companies",
      name: "companies",
      component: DisplayCompanies
    },
    {
      path: "/stages",
      name: "internship",
      component: Internship
    }

  ]
})

export default router
