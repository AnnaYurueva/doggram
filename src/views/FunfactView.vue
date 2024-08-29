<template>
    <div class="row mt-4 mx-4">
        <div v-if="loading" role="status" class="max-w-[600px] w-full mx-auto animate-pulse rtl:space-x-reverse">
            <div class=" h-96 w-full flex items-center justify-center bg-gray-300 rounded-xl shadow-xl dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <div class="w-full p-4">
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span class="sr-only">Loading...</span>
        </div>
        <article v-else class="max-w-[600px] w-full mx-auto">
            <div class="shadow-xl rounded-xl overflow-hidden h-96 w-full">
                <img v-if="media.format === 'img'" alt="" :src="media.url" class="h-full w-full object-cover" />
                <video v-else :src="media.url" autoplay muted loop class="object-cover w-full h-full" />
            </div>

            <div class="p-4">
                <h3 class="text-lg font-medium text-gray-900">{{ fact.title }}...</h3>
                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {{ fact.text }}
                </p>
            </div>
        </article>

    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchInitialMedia, fetchInitialFact } from '@/api/factPage'

interface IFact {
    title: string
    text: string
}

interface IMedia {
    url: string
    format: string
}

const fact = ref({} as IFact)
const media = ref({} as IMedia)

const loading = ref(false)

async function getFact() {
    const factContent = await fetchInitialFact();
    fact.value.title = factContent.slice(0, 30);
    fact.value.text = factContent
}

async function getMedia() {
    const content = await fetchInitialMedia();
    media.value.url = content;
    media.value.format = content.indexOf('.mp4') !== -1 ? 'video' : 'img'
}

onMounted(async () => {
    loading.value = true
    await getFact();
    await getMedia();
    setTimeout(() => loading.value = false, 300)
})
</script>