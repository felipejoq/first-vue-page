<template>
    <section class="py-20 bg-gray-100" id="features">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Características</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="text-blue-500 mb-4">
              <component :is="feature.icon" class="w-12 h-12 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { BoltIcon, HeartIcon, SunIcon } from '@heroicons/vue/24/outline';
  
  const features = [
    {
      title: 'Energía Instantánea',
      description: 'Obtén un impulso de energía al instante con nuestra bebida en lata.',
      icon: BoltIcon,
    },
    {
      title: 'Saludable',
      description: 'Hecha con ingredientes naturales y sin azúcares añadidos.',
      icon: HeartIcon,
    },
    {
      title: 'Refrescante',
      description: 'El sabor perfecto para refrescar tu día.',
      icon: SunIcon,
    },
  ];
  </script>