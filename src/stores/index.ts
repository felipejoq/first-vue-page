import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    formData: {
      name: '',
      email: '',
      message: '',
    },
  }),
  actions: {
    setFormData(data: { name: string; email: string; message: string }) {
      this.formData = data;
    },
  },
});