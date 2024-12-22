<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <NuxtLayout name="user">
    <UserOrder />
  </NuxtLayout>
</template>