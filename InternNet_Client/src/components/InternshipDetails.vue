<script setup>
import { useRoute } from "vue-router";
import { useInterNetStore } from "@/stores/myStore";
import { storeToRefs } from "pinia";

const store = useInterNetStore();
const { internships } = storeToRefs(store);

const route = useRoute();
const id = Number(route.params.id);

const internship = internships.value.find((internship) => internship.id === id);
</script>

<template>
  
  <p>{{ internship.title }}</p>
  <p>{{ internship.details }}</p>
  <p>{{ internship.start }}</p>
  <p>{{ internship.end }}</p>
  
</template>

<style scoped></style>
