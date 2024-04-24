<script setup>
import { useInterNetStore } from "@/stores/myStore";
import { storeToRefs } from "pinia";
import { ref, reactive } from "vue";

const store = useInterNetStore();
const { createCompany } = store;
const { companies } = storeToRefs(store);

const showForm = ref("");

const newCompany = reactive({
  name: "",
  details: "",
  localisation: "",
});

const submitHandler = () => {
  createCompany(newCompany);
  console.log("form submitted");
};
</script>

<template>
  <div
    class="form-company"
    v-if="companies.length === 0 || showForm === 'show'"
  >
    <h3>Formulaire company</h3>
    <form action="#" @submit.prevent="submitHandler">
      <div class="label-input">
        <label for="name">Nom :</label>
        <input id="name" type="text" v-model="newCompany.name" />
      </div>
      <div class="label-input">
        <label for="details">Description :</label>
        <textarea
          name="details"
          id="details"
          cols="30"
          rows="10"
          v-model="newCompany.details"
        ></textarea>
      </div>
      <div class="label-input">
        <label for="localisation">Adresse :</label>
        <input
          id="localisation"
          type="text"
          v-model="newCompany.localisation"
        />
      </div>
      <button>Valider</button>
      <button @click="showForm = ''">Fermer</button>
    </form>
  </div>

  <h1>Affichage</h1>
  <div v-for="company in companies">
    <p>{{ company.name }}</p>
  </div>
  <button @click="showForm = 'show'">Ajouter une entreprise</button>
</template>

<style scoped></style>
