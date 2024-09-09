<template>
    <form @submit.prevent="submitForm">
        <div class="relative pb-6">
            <label class="sr-only" for="name">Name</label>
            <input v-model="form.name" class="w-full rounded-lg border-2 border-violet-800/50 p-2.5" placeholder="Name"
                type="text" id="name" @blur="validateField('name')" />
            <span v-if="errors.name && !isNameValid" class="absolute bottom-2 left-0 text-xs leading-3 text-pink-700">
                {{ errors.name }}
            </span>
        </div>
        <RadioGroup v-model="form.sex">
            <RadioGroupLabel class="sr-only">Sex</RadioGroupLabel>
            <div class="flex justify-between gap-4 mb-6">
                <RadioGroupOption as="template" v-for="(item, index) of sex" :key="item + index" :value="item"
                    v-slot="{ active, checked }">
                    <div :class="[
                        checked ? 'bg-violet-900 text-white' : 'bg-white',
                    ]" class="relative flex cursor-pointer w-full rounded-lg p-3 shadow-md">
                        <div class="flex w-full items-center justify-between">
                            <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-violet-800'" class="font-medium">
                                {{ item }}
                            </RadioGroupLabel>
                        </div>
                    </div>
                </RadioGroupOption>
            </div>
        </RadioGroup>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="relative pb-6">
                <label class="sr-only" for="birthDate">Birth date</label>
                <input v-model="form.birthDate" class="w-full rounded-lg border-2 border-violet-800/50 p-2.5"
                    name="Birth date" type="date" id="birthDate" :max="new Date().toISOString().split('T')[0]"
                    @blur="validateField('birthDate')" />
                <span v-if="errors.birthDate && !isBirthDateValid"
                    class="absolute bottom-2 left-0 text-xs leading-3 text-pink-700">{{ errors.birthDate }}</span>
            </div>

            <Listbox v-model="form.breed">
                <div class="relative">
                    <ListboxButton
                        class="relative w-full cursor-default rounded-lg bg-white p-3 border-2 border-violet-800/50 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span class="block truncate">{{ form.breed?.name }}</span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <ListboxOptions
                            class="absolute z-50 mt-1 max-h-36 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            <ListboxOption v-slot="{ active, selected }" v-for=" item  in  breeds " :key="item.name"
                                :value="item" as="template">
                                <li :class="[
                                    active ? 'bg-violet-100 text-violet-900' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 px-4',
                                ]">
                                    <span :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]">
                                        {{ item.name }}
                                    </span>
                                    <span v-if="selected"
                                        class="absolute inset-y-0 right-4 flex items-center pl-3 text-violet-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="relative pb-6">
                <label class="sr-only" for="weight">Weight</label>
                <input v-model="form.weight" class="w-full rounded-lg border-2 border-violet-800/50 p-2.5"
                    placeholder="Weight" type="number" id="weight" @blur="validateField('weight')" />
                <span v-if="errors.weight && !isWeightValid"
                    class="absolute bottom-2 left-0 text-xs leading-3 text-pink-700">
                    {{ errors.weight }}
                </span>
            </div>

            <div class="relative pb-6">
                <label class="sr-only" for="color">Color</label>
                <input v-model="form.color" class="w-full rounded-lg border-2 border-violet-800/50 p-2.5"
                    placeholder="Color" type="text" id="color" @blur="validateField('color')" />
                <span v-if="errors.color && !isColorValid" class="absolute bottom-2 left-0 text-xs leading-3 text-pink-700">
                    {{ errors.color }}
                </span>
            </div>
        </div>

        <div class="flex gap-4">
            <button type="submit" class="rounded-md bg-violet-600 px-5 py-3 font-medium text-white">
                Save
            </button>
            <button @click.prevent="emits('closeForm')"
                class="rounded-md bg-gray-100 px-5 py-3 font-medium text-violet-800">
                Cancel
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { getBreeds } from '@/api/doggram'

const emits = defineEmits(['closeForm'])

const sex = ["male", 'famele']
const breeds = ref([])

const form = ref({
    name: '',
    color: '',
    weight: null,
    birthDate: null,
    sex: sex[0],
    breed: null,
    id: null,
})

const errors = ref({});

const isNameValid = computed(() => form.value.name.trim() !== '');
const isColorValid = computed(() => form.value.color.trim() !== '');
const isBirthDateValid = computed(() => form.value.birthDate !== null);
const isWeightValid = computed(() => form.value.weight !== 0 && form.value.weight !== null);

const validateField = (field) => {
    errors.value[field] = '';
    if (field === 'name' && !isNameValid.value) {
        errors.value.name = 'Name is required.';
    }
    if (field === 'color' && !isColorValid.value) {
        errors.value.color = 'Color is required.';
    }
    if (field === 'birthDate' && !isBirthDateValid.value) {
        errors.value.birthDate = 'Birth date is required.';
    }
    if (field === 'weight' && !isWeightValid.value) {
        errors.value.weight = 'Mass cannot be zero.';
    }
};

const createPetCard = () => {
    const petsStorage = localStorage.getItem('petsCards')
    let petsCards = [];

    if (petsStorage?.length) {
        petsCards = JSON.parse(petsStorage)
    }

    form.value.id = petsCards.length ? petsCards.length + 1 : 1
    form.value.breed = form.value.breed?.name

    petsCards.push(form.value)

    localStorage.setItem('petsCards', JSON.stringify(petsCards))
}

const submitForm = () => {
    errors.value = {}

    validateField('name');
    validateField('color');
    validateField('birthDate');
    validateField('weight');

    let errorsCount = 0
    for (const error of Object.values(errors.value)) {
        if (error.length > 0) {
            errorsCount++
        }
    }

    if (errorsCount === 0) {
        createPetCard()
        emits('closeForm')
    } else {
        console.log(errors.value);
    }
};

onMounted(async () => {
    breeds.value = await getBreeds();
    form.value.breed = breeds.value[0]
})
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>
