import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useInterNetStore = defineStore("interNet", () => {
  const API_BASE_URL = "http://localhost:7777";
  const companies = ref([]);
  const internships = ref([]);

  const fetchCompanies = async () => {
    try {
      const result = await axios.get(`${API_BASE_URL}/companies`);
      companies.value = result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createCompany = async (newCompany) => {
    try {
      const result = await axios.post(`${API_BASE_URL}/companies`, {
        newCompany,
      });
      if (result.status === 200) {
        fetchCompanies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInternships = async () => {
    try {
      const result = await axios.get(`${API_BASE_URL}/internships`);
      internships.value = result.data;
    } catch (error) {
      console.log(error);
    }
  }

  const createInternship = async (newInternship) => {
    try {
      const result = await axios.post(`${API_BASE_URL}/internships`, {
        newInternship,
      });
      if (result.status === 200) {
        fetchInternships();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { companies, internships, fetchCompanies, createCompany, fetchInternships, createInternship };
});
