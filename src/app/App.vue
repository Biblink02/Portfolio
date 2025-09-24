<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import {detectSystemTheme, toggleDarkMode} from "./ts/Utils";

onMounted(() => {
    if(detectSystemTheme()) {
        toggleDarkMode()
    }
})
</script>

<template>
    <RouterView />
</template>
