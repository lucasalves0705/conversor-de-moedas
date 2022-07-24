<template>
    <div
        class="fill-current">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            :width="size+'px'"
            :height="size+'px'"
            :fill="color"
            class="fill-current"
        >
            <path
                d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"/>
        </svg>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
    size: {
        type: String,
        size: '16',
    },
    color: {
        type: String,
        default: '#000000',
    }
})
</script>

<style scoped>

</style>