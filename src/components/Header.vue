<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="md:flex md:items-center md:gap-12">
                    <RouterLink class="block text-teal-600" to="/">
                        <span class="sr-only">Home</span>
                        <svg id="logo-40" width="53" height="32" viewBox="0 0 53 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 16C0 7.16344 7.16344 0 16 0H37C45.8366 0 53 7.16344 53 16V32H16C7.16344 32 0 24.8366 0 16Z"
                                fill="#7C3AED" class="ccustom"></path>
                            <rect x="6" y="6" width="41" height="20" rx="10" fill="#DDD6FE" class="ccompli2"></rect>
                            <circle cx="16" cy="16" r="5" fill="#000000"></circle>
                            <circle cx="14" cy="14" r="1" fill="#ffffff"></circle>
                            <circle cx="38" cy="16" r="5" fill="#000000"></circle>
                            <circle cx="36" cy="14" r="1" fill="#ffffff"></circle>
                        </svg>
                    </RouterLink>
                </div>
                <div class="hidden md:block">
                    <nav aria-label="Global">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <RouterLink class="text-violet-800 transition hover:text-violet-800/75" to="#"> Fanfact
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="text-violet-800 transition hover:text-violet-800/75" to="#"> Doggram
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <div class="hidden sm:flex">
                            <RouterLink class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-violet-800"
                                to="#">
                                Account
                            </RouterLink>
                        </div>
                        <RouterLink class="rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                            to="#">
                            Login
                        </RouterLink>
                    </div>
                    <div class="block md:hidden">
                        <button class="rounded bg-gray-100 p-2 text-violet-800 transition hover:text-violet-800/75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
