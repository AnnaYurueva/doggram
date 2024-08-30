<template>
    <div class="flex flex-col gap-4 mx-2 my-4">
        <FotoCard v-for="item of fotos" v-bind="item" />
    </div>
</template>

<script setup lang="ts">
import { getInitalDogsFotos } from "@/api/doggram";
import FotoCard from '@/components/Fotos/FotoCard.vue';
import type { IFoto } from "@/types/foto";

const fotos: IFoto[] = await getInitalDogsFotos()
</script>