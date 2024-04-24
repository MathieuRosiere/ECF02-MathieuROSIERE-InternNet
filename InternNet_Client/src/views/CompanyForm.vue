<script setup>
// import { reactive } from "vue";
// import { useInterNetStore } from "@/stores/myStore";

// const store = useInterNetStore();
// const { createCompany } = store;

// const newCompany = reactive({
//   name: "",
//   details: "",
//   localisation: "",
// });

// const submitHandler = () => {
//   createCompany(newCompany);
//   console.log("form submitted");
// };
</script>

<template>
  <h3>Formulaire company</h3>
  <form action="" @submit.prevent="submitHandler">
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
      <input id="localisation" type="text" v-model="newCompany.localisation" />
    </div>
    <button>Valider</button>
  </form>
</template>

<style scoped></style>
