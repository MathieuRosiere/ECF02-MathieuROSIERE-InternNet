<script setup>
import { useInterNetStore } from "@/stores/myStore";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const emits = defineEmits(['closeModal'])

const store = useInterNetStore();
const { companies, internships } = storeToRefs(store);
const { createInternship } = store;

const newInternship = reactive({
  title: "",
  details: "",
  start: "",
  end: "",
  company_id: 0,
});

const submitInternshipHandler = () => {
  createInternship(newInternship);
  console.log("internship added to db");
};
</script>

<template>
  <div class="modal-bg" @click.self="$emit('closeModal')">
    <div class="modal-content">
      <form action="#" @submit.prevent="submitInternshipHandler">
        <div>
          <label for="company">Entreprise :</label>
          <select
            name="company"
            id="company"
            v-model="newInternship.company_id"
          >
            <option v-for="company in companies" :value="company.id">
              {{ company.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="title">Titre :</label>
          <input id="title" type="text" v-model="newInternship.title" />
        </div>
        <div>
          <label for="details">Description :</label>
          <input id="details" type="text" v-model="newInternship.details" />
        </div>
        <div>
          <label for="start">Date de début :</label>
          <input id="start" type="date" v-model="newInternship.start" />
        </div>
        <div>
          <label for="end">Date de fin :</label>
          <input id="end" type="date" v-model="newInternship.end" />
        </div>
        <button>Valider</button>
      </form>

      <button @click="$emit('closeModal')">Fermer</button>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-content: center;
}

.modal-content {
  height: 600px;
  padding: 5%;
  box-sizing: border-box;
  border: solid 4px var(--font-color-white);
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
  background-color: var(--body-bg-color);
  display: flex;
  flex-flow: column nowrap;
}
</style>
