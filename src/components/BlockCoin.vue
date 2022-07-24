<template>
    <div class="w-80 bg-white rounded-2xl relative m-2">
        <div
            class="border-b px-4 py-2 flex items-center justify-between hover:text-red-500 rounded-t-2xl"
            @click="openSelect(true)"
        >
            <div>{{ currentCoin.name }}</div>
            <div><IconChevron size="16" /></div>
        </div>

        <div
            class="w-full border-b rounded-2xl absolute top-0 bg-white max-h-72 overflow-auto"
            v-show="openedCoins"
        >
            <div
                class="px-4 py-2 hover:bg-gray-400 first:rounded-t-2xl last:rounded-b-2xl"
                v-for="coin in coins"
                :key="coin.code"
                @click="changeSelected(coin)"
                :class="coin.code === currentCoin.code ? 'font-medium' : ''"
            >
                {{ coin.name }}
            </div>
        </div>

        <div
            class="rounded-b-2xl"
        >
            <input
                type="text"
                class="w-full p-4 py-2 rounded-b-2xl focus:outline-none"
                :value="value"
            >
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import IconChevron from "./icons/IconChevron.vue"

const emit = defineEmits(['change'])

const props = defineProps({
    currentCoin: Object,
    coins: Array,
    value: Number,
})

const openedCoins = ref(false)

function openSelect(value) {
    openedCoins.value = value
}

function changeSelected(coin) {
    openSelect(false)
    emit('change', coin)
}
</script>

<style scoped>

</style>