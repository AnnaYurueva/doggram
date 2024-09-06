<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-4 m-4">
        <AccountNewCard @click="showModal = true" />
    </div>
    <AccountModal :openModal="showModal" @closeModal="showModal = false" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import AccountNewCard from '@/components/Account/AccountNewCard.vue'
import AccountModal from '@/components/Account/AccountModal.vue'

const showModal = ref(false)
</script>