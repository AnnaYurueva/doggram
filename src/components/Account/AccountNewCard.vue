<template>
    <button
        class="relative overflow-hidden flex flex-col items-center justify-center w-full h-full shadow-xl rounded-xl p-4 bg-violet-100 group"
        @click="emits('click')">
        <h3 class="text-violet-300 font-bold group-hover:text-violet-800 transition-all">New pet</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-16 text-violet-200 group-hover:text-violet-600 transition-all">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['click'])
</script>
