<script setup>
import { useInterNetStore } from "@/stores/myStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import InternshipForm from "@/components/InternshipForm.vue";
import InternshipDetails from "@/components/InternshipDetails.vue";

const store = useInterNetStore();
const { internships } = storeToRefs(store);

const modalDisplay = ref("");


const showDetailsHandler = () => {
  
};
</script>

<template>
  <h3>Stages</h3>

  <InternshipForm
    v-if="modalDisplay === 'show'"
    @closeModal="modalDisplay = ''"
  />

  <div v-for="internship in internships">
    <p>{{ internship.title }}</p>
    <button> <RouterLink id="router-link"
        :to="{
          name: 'Details',
          params: {
            id: internship.id,
          },
        }"
        >Détails</RouterLink
      ></button>
    
  </div>
  <button @click="modalDisplay = 'show'">Ajouter un stage</button>
</template>

<style scoped></style>
