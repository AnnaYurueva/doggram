<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import { useUserStore } from "@/stores/user";

const store = useUserStore()

onMounted(() => {
  let id = localStorage.getItem('userId');

  if (!id) {
    let generateId = Math.round(Date.now() + Math.random())
    localStorage.setItem('userId', `my-user-${generateId}`);
    id = `my-user-${generateId}`
  }

  store.setUserId(id)
})
</script>

<template>
  <div>
    <Header />

    <RouterView />
  </div>
</template>

<style scoped></style>
