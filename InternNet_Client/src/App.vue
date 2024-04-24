<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useInterNetStore } from "./stores/myStore";

const store = useInterNetStore();
const { fetchCompanies, fetchInternships } = store;

onMounted(() => {
  fetchInternships();
  fetchCompanies();
});
</script>

<template>
  <header>
    <nav>
      <RouterLink class="router" to="/">Accueil</RouterLink>
      <RouterLink class="router" to="/companies">Entreprises</RouterLink>
      <RouterLink class="router" to="/stages">Stages</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer></footer>
</template>

<style scoped>
header {
  height: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

footer {
  height: 10%;
}

.router {
  text-decoration: none;
  padding-right: 15px;
}
</style>
