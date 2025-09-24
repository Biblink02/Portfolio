<script setup lang="ts">
import { headerImage } from '../ts/ImageHelper'
import { onMounted, ref } from 'vue'
import CurriculumMenu from './menu/CurriculumMenu.vue'
import PersonalInfo from './menu/PersonalInfoMenu.vue'
import ProjectsMenu from './menu/ProjectsMenu.vue'
import ContactMenu from './menu/ContactMenu.vue'
import darkModeFavicon from '~/images/favicon/briefcase-white.png'
import favicon from '~/images/favicon/briefcase-black.png'
import { useHead } from '@unhead/vue'
import {toggleDarkMode} from "../ts/Utils";

useHead({
    title: "Alberto Bottari's Portfolio",
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: window.matchMedia('(prefers-color-scheme: dark)').matches
                ? darkModeFavicon
                : favicon,
        },
    ],
})

onMounted(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Alberto Bottari',
        jobTitle: 'Software Developer',
        url: window.location.origin,
        sameAs: [
            'https://linkedin.com/in/albertobottari',
            'https://github.com/albertobottari',
        ],
    })
    document.head.appendChild(script)
})

const menuItems = ref(
    new Map([
        [
            'personal-info',
            { label: 'Personal Info', icon: 'pi pi-user', active: true },
        ],
        [
            'projects',
            { label: 'Projects', icon: 'pi pi-folder', active: false },
        ],
        [
            'curriculum',
            { label: 'Curriculum', icon: 'pi pi-file', active: false },
        ],
        [
            'contact',
            { label: 'Contact', icon: 'pi pi-envelope', active: false },
        ],
    ])
)

function changeMenuTo(key: string) {
    menuItems.value.forEach((item, k) => (item.active = k === key))
}


</script>

<template>

    <div class="max-w-7xl w-full mx-auto pt-4 p-1 sm:p-4 md:p-7 space-y-10">
        <!-- Scroll to Top Button -->
        <ScrollTop
            :pt="{
                root: {
                    style: { background: 'var(--color-favourite_yellow)' },
                },
            }"
        />

        <!-- Dark Mode -->
        <button
            @click="toggleDarkMode"
            class="lg:fixed absolute cursor-pointer top-9 right-9 text-favourite_yellow"
            title="Toggle Dark Mode"
        >
            <div class="hidden dark:block">
                <i class="pi pi-sun hidden" style="font-size: 1.6rem"></i>
            </div>
            <div class="dark:hidden">
                <i class="pi pi-moon hidden" style="font-size: 1.5rem"></i>
            </div>
        </button>
        <!-- Header -->
        <header aria-labelledby="site-header">
            <div class="my-auto pb-6">
                <img
                    :src="headerImage"
                    alt="Profile picture of Alberto Bottari"
                    class="w-22 sm:w-25 md:w-31 lg:w-28 mx-auto rounded-full"
                />
            </div>

            <h1 class="m-auto py-1 w-fit font-bold text-2xl text-center tracking-wide dark:text-gray-200 text-gray-800">
                Alberto Bottari
                <br>
                <i class="pi pi-spin pi-arrow-right-arrow-left text-favourite_yellow"></i>
                <br>
                Biblink
            </h1>

            <h2
                class="pt-1 m-auto w-fit max-sm:w-full max-sm:text-center max-sm:justify-center"
            >
                Passionate about coding, curious about everything.
            </h2>
        </header>

        <!-- Navigation -->
        <nav aria-label="Main menu" role="navigation">
            <ul
                class="flex flex-col space-y-2 px-12 min-[400px]:px-16 min-[500px]:px-30 sm:px-0"
            >
                <Menubar
                    :model="[...menuItems]"
                    class="w-full sm:w-fit mx-auto"
                    breakpoint="640px"
                >
                    <template #item="{ item, props }">
                        <li>
                            <button
                                v-bind="props"
                                @click="changeMenuTo(item[0])"
                                :aria-current="item[1].active ? 'page' : false"
                                :class="['px-4 rounded-md transition duration-300 cursor-pointer py-2 sm:py-0',item[1].active ? 'text-favourite_yellow': '',]"
                            >
                                <span :class="item[1].icon" class="mr-2" />
                                {{ item[1].label }}
                            </button>
                        </li>
                    </template>
                </Menubar>
            </ul>
        </nav>

        <!-- Main content -->
        <main class="mt-10" aria-labelledby="main-content" role="main">
            <h2 id="main-content" class="sr-only">Main content section</h2>
            <section
                v-show="menuItems.get('personal-info').active"
                aria-labelledby="personal-info-section"
            >
                <h3 id="personal-info-section" class="sr-only">
                    Personal Information
                </h3>
                <PersonalInfo />
            </section>

            <section
                v-show="menuItems.get('projects').active"
                aria-labelledby="projects-section"
            >
                <h3 id="projects-section" class="sr-only">Projects</h3>
                <ProjectsMenu />
            </section>

            <section
                v-show="menuItems.get('curriculum').active"
                aria-labelledby="curriculum-section"
            >
                <h3 id="curriculum-section" class="sr-only">Curriculum</h3>
                <CurriculumMenu />
            </section>

            <section
                v-show="menuItems.get('contact').active"
                aria-labelledby="contact-section"
            >
                <h3 id="contact-section" class="sr-only">Contact</h3>
                <ContactMenu />
            </section>
        </main>


        <!-- Footer -->
        <footer aria-labelledby="footer-section">
            <p id="footer-section" class="text-center text-sm text-gray-400">
                &copy; {{ new Date().getFullYear() }} Alberto Bottari. All
                rights reserved.
            </p>
        </footer>
    </div>
</template>

<style scoped>

</style>
