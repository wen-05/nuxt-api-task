<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <NuxtLayout name="user">
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>