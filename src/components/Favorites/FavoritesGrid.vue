<template>
    <div v-if="fotos.length" class="m-4 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        <div v-for="item of fotos"
            class="flex flex-col rounded-lg mb-4 overflow-hidden group transition-all bg-gray-900 relative">
            <img class="h-auto max-w-full w-full group-hover:opacity-50 transition-all" :src="item.image.url"
                :alt="item.id">
            <button
                class="inline-block size-10 absolute inset-1/2 -ml-5 -mt-5 opacity-0 group-hover:opacity-100 transition-all"
                @click="deleteFoto(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    class="size-10 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
    <div v-else class="m-4">
        <h2 class="text-3xl font-black mb-2">It's empty here</h2>
        <p class="text-lg">But you can add your favorite photos here from
            <RouterLink class="text-violet-800 underline" to="/">
                here
            </RouterLink>
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getFavorites, deleteFotoFromFavorites } from "@/api/doggram";
import type { IFoto } from "@/types/foto";

const fotos = ref([])

const deleteFoto = async (id: string) => {
    await deleteFotoFromFavorites(id)
    fotos.value = await getFavorites();
}

fotos.value = await getFavorites();
</script>