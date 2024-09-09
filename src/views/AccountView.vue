<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-4 m-4">
        <AccountCard v-for="item of petsCards" v-bind="item" @deleteCard="deleteCard(item)" />
        <AccountNewCard @click="showModal = true" />
    </div>
    <AccountModal :openModal="showModal" @closeModal="showModal = false" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import AccountNewCard from '@/components/Account/AccountNewCard.vue'
import AccountCard from '@/components/Account/AccountCard.vue'
import AccountModal from '@/components/Account/AccountModal.vue'
import type { IAccount } from '@/types/account.ts'

const showModal = ref(false)
const petsCards = ref([] as IAccount[])

const deleteCard = (item: IAccount) => {
    petsCards.value = petsCards.value.filter((card) => card !== item)
    localStorage.setItem('petsCards', JSON.stringify(petsCards.value))
}

const getCards = () => {
    if (localStorage.getItem('petsCards')) {
        const content = localStorage.getItem('petsCards')
        petsCards.value = JSON.parse(content)
    }
}

onMounted(() => {
    getCards()
})

watch(showModal, (opened) => {
    if (!opened) {
        getCards()
    }
})
</script>