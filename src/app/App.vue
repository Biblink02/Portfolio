<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import {toggleDarkMode} from "./ts/Utils";
import { useDark } from '@vueuse/core'

onMounted(() => {
    if(useDark()) { //TODO vedi se funziona
        toggleDarkMode()
    }
})
</script>

<template>
    <RouterView />
</template>
