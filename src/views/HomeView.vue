<template>
    <div class="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/sections/Header.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import FeaturesSection from '../components/sections/FeaturesSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import Footer from '../components/sections/Footer.vue';
</script>