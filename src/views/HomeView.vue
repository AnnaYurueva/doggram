<script setup lang="ts">
import FotoCardSkeleton from '@/components/Fotos/FotoCardSkeleton.vue';
import FotosGrid from '@/components/Fotos/FotosGrid.vue'
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <FotosGrid />
      </template>
      <template #fallback>
        <FotoCardSkeleton v-for="i of 3" />
      </template>
    </Suspense>
  </main>
</template>
