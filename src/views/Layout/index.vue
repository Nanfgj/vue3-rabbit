<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from "@/views/Layout/components/LayoutSticky.vue";
</script>

<template>
  <LayoutSticky />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>