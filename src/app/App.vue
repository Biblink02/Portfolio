<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useHead} from "@unhead/vue";
import {computed} from "vue";
import darkModeFavicon from "~/images/favicon/briefcase-white.png";
import favicon from "~/images/favicon/briefcase-black.png";
import {useDark} from "@vueuse/core";

const isDarkMode = useDark()
const faviconHref = computed(() =>
    isDarkMode.value ? darkModeFavicon : favicon
)
useHead({
    title: "Alberto Bottari's Portfolio",
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: faviconHref
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            children: {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Alberto Bottari',
                jobTitle: 'Software Developer',
                url: 'https://biblink02.github.io/',
                sameAs: [
                    'https://linkedin.com/in/albertobottari',
                    'https://github.com/albertobottari',
                ],
            },
        },
    ],
})
</script>

<template>
    <RouterView />
</template>
