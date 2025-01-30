<template>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12" id="contact">Contáctanos</h2>
        <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
          <div class="mb-6">
            <label for="name" class="block text-gray-700 mb-2">Nombre</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block text-gray-700 mb-2">Correo Electrónico</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block text-gray-700 mb-2">Mensaje</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useMainStore } from '../../stores/index.ts';
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  });
  
  const mainStore = useMainStore();
  
  const submitForm = () => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API.
    console.log('Formulario enviado:', form.value);
    mainStore.setFormData(form.value); // Guardar en el estado global (opcional)
    alert('¡Gracias por tu mensaje!');
    form.value = { name: '', email: '', message: '' }; // Limpiar el formulario
  };
  </script>