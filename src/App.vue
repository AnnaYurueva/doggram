<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useUserStore } from "@/stores/user";
import { isConstructorDeclaration } from 'typescript';

const store = useUserStore()

onMounted(() => {
  let id = localStorage.getItem('userId');

  if (!id) {
    let generateId = Math.round(Date.now() + Math.random())
    localStorage.setItem('userId', `my-user-${generateId}`);
    id = `my-user-${generateId}`
  }

  store.setUserId(id)
  console.log(store.getUserId)
})
</script>

<template>
  <div>
    <Header />

    <RouterView />
  </div>
</template>

<style scoped></style>
