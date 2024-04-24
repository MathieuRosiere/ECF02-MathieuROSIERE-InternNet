import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import DisplayCompanies from "@/views/DisplayCompanies.vue";
import Internship from "@/views/Internship.vue";
import InternshipDetails from "@/components/InternshipDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/companies",
      name: "companies",
      component: DisplayCompanies,
    },
    {
      path: "/stages",
      name: "internship",
      component: Internship,
    },
    {
      path: '/InternshipDetails/:id',
      name: 'Details',
      component: InternshipDetails
    }
  ],
});

export default router;
