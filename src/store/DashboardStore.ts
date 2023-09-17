import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { documentInterface } from "../interfaces";

export const useDashboardStore = defineStore("dashboardStore", () => {
  const documentsList: Ref<documentInterface[] | []> = ref([]);
  const isLoader: Ref<boolean> = ref(false);
  const getDocuments = async (search:string): Promise<void> => {
    try {
      if (search) {
        isLoader.value = true
        const response: AxiosResponse<documentInterface[]> = await axios.get(`http://68.183.212.124:3000/user/docs?search=${search}`);
        documentsList.value = response.data;
        isLoader.value = false
      } else {
        documentsList.value = [];
      }
    } catch (error) {
      alert(error)
      isLoader.value = false
    }
  };
  return {
    documentsList,
    isLoader,
    getDocuments,
  };
});
