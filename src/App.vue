<script setup>
import InitialHeader from "./components/headers/InitialHeader.vue";
import AppFooter from "./components/fotters/AppFooter.vue"
</script>

<template>
  <div
    class="bg-surface-container-lowest text-on-surface min-h-screen overflow-x-hidden"
  >
    <InitialHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
