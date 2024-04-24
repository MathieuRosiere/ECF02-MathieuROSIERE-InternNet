<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useInterNetStore } from "./stores/myStore";

const store = useInterNetStore();
const { fetchCompanies, fetchInternships } = store;

onMounted(() => {
  fetchCompanies();
  fetchInternships();
});
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/companies">Entreprises</RouterLink>
      <RouterLink to="/stages">Stages</RouterLink>
    </nav>
  </header>
  <RouterView />
  <h1>mon app</h1>
</template>

<style scoped></style>
