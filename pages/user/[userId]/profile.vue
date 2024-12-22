<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <NuxtLayout name="user">
    <UserProfile />
  </NuxtLayout>
</template>