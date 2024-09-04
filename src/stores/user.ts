import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userId = ref<string>('')
  const getUserId = computed(() => userId.value)

  function setUserId(id: string) {
    userId.value = id
  }

  return { userId, setUserId, getUserId }
})
