<script setup lang="ts">
import ColorCuriosities from '../partials/ColorCuriosities.vue'
import {personalInfoCarousel, responsiveOptions} from '../../ts/ImageHelper'
import proxmoxDarkMode from '~/images/personal-info/proxmoxDarkMode.svg'
import proxmox from '~/images/personal-info/proxmox.svg'
import filamentDarkMode from '~/images/personal-info/filamentDarkMode.svg'
import filament from '~/images/personal-info/filament.svg'
import { useDark } from '@vueuse/core'

const isDarkMode = useDark()

const aboutMe = [
    {
        label: 'Introduction',
        text: `Hi! I'm Alberto, a developer with a split personality—I love full-stack web development but C++ was my
            first programming love. While I enjoy creating web apps, you'll usually find me deep in backend optimization
            and database tuning. Sorry, frontend!`,
        class: null,
    },
    {
        label: 'Strength and Weaknesses',
        text: `My greatest strengths are my curiosity and quick learning ability, which help me adapt easily to new
            technologies and challenges. I thrive under pressure and always deliver results. I'm also known for speaking up
            when something isn't right—integrity in code and life is non-negotiable.`,
        class: null,
    },
    {
        label: 'Beyond Code',
        text: `Beyond coding, I'm an outdoor enthusiast who enjoys both beach days and skiing. I love board game nights
            with friends (yes, I get competitive!), and I share my home with four dogs who keep me grounded. 🐶`,
        class: null,
    },
    {
        label: 'Philosophy',
        text: `"If life is a balancing act, I guess I’m just here trying to debug it."`,
        class: 'font-medium',
    },
]

const skills = [
    {
        header: 'Languages 🖥️',
        elements: [
            {icon: 'devicon-cplusplus-plain', link: 'https://isocpp.org/'},
            {icon: 'devicon-kotlin-plain-wordmark', link: 'https://kotlinlang.org/'},
            {icon: 'devicon-typescript-plain', link: 'https://www.typescriptlang.org/'},
            {icon: 'devicon-php-plain', link: 'https://www.php.net/'},
            {icon: 'devicon-vuejs-plain-wordmark', link: 'https://vuejs.org/'},
            {icon: 'devicon-javascript-plain', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
            {icon: 'devicon-html5-plain-wordmark', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
            {icon: 'devicon-css3-plain-wordmark', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'}
        ]
    },
    {
        header: 'Technologies 🤖',
        elements: [
            {icon: 'devicon-git-plain', link: 'https://git-scm.com/'},
            {icon: 'devicon-docker-plain-wordmark', link: 'https://www.docker.com/'},
            {icon: 'devicon-laravel-plain-wordmark', link: 'https://laravel.com/'},
            {icon: 'devicon-tailwindcss-plain-wordmark', link: 'https://tailwindcss.com/'},
            {icon: 'pi pi-prime', link: 'https://primevue.org/'},
            {image: isDarkMode ? filamentDarkMode : filament, alt: 'Filament', link: 'https://filamentphp.com/'},
            {image: isDarkMode ? proxmoxDarkMode : proxmox, alt: 'Proxmox', link: 'https://www.proxmox.com/'},
            //PrimeVue',
        ]
    },
];

</script>

<template>
    <section aria-labelledby="about-me-section">
        <Card>
            <template #title>
                <h2 id="about-me-section" class="text-favourite_yellow">
                    About Me:
                </h2>
            </template>
            <template #content>
                <section class="pb-2">
                    <article
                        v-for="part in aboutMe"
                        :key="part.label"
                        :aria-labelledby="`about-${part.label.toLowerCase().replace(/\s/g, '-')}`"
                        class="py-1"
                        :class="part.class ? part.class : null"
                    >
                        <h3
                            :id="`about-${part.label.toLowerCase().replace(/\s/g, '-')}`"
                            class="sr-only"
                        >
                            {{ part.label }}
                        </h3>
                        <p v-html="part.text"/>
                    </article>
                </section>

                <!-- Image Carousel -->
                <section aria-labelledby="personal-carousel">
                    <h3 id="personal-carousel" class="sr-only">
                        Personal Images
                    </h3>
                    <Carousel
                        :value="personalInfoCarousel"
                        :num-visible="3"
                        :num-scroll="3"
                        :responsive-options="responsiveOptions"
                        :autoplay-interval="4000"
                        circular
                        class="custom-carousel"
                    >
                        <template #item="slotProps">
                            <div
                                class="m-3 rounded-md h-full mx-auto max-h-90 aspect-[3/4] bg-cover bg-center"
                                :style="{
                                    backgroundImage: `url(${slotProps.data.image})`,
                                }"
                                role="img"
                                :aria-label="`Image related to ${slotProps.data.label}`"
                            />
                        </template>
                    </Carousel>
                </section>

                <!-- Skills and Passions -->
                <section aria-labelledby="skills-section">
                    <h3 id="skills-section" class="sr-only">
                        Skills and Technologies
                    </h3>
                    <Fieldset
                        v-for="field in skills"
                        :key="field.header"
                        :legend="field.header"
                        class="pt-8"
                    >
                        <div>
                            <div class="gap-8 flex flex-wrap flex-row m-4 w-full max-w-4xl mx-auto justify-center py-1"
                                 v-if="field.elements">
                                <template v-for="element in field.elements">
                                    <a :href="element.link"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       class="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:h-full lg:place-content-center"
                                    >
                                        <!-- Render Devicon icons -->
                                        <i v-if="element.icon"
                                           style="font-size: 5rem"
                                           :class="['',element.icon, isDarkMode ? 'text-white':'text-black']">
                                        </i>

                                        <!-- Render image-based icons -->
                                        <img v-else-if="element.image"
                                             :src="element.image"
                                             :alt="element.icon"
                                             class="w-full max-w-[10rem] y-fit">
                                    </a>
                                </template>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section aria-labelledby="passions-section">
                    <h3 id="passions-section" class="sr-only">
                        Passions
                    </h3>
                    <Fieldset
                        key="Passions 💡"
                        legend="Passions 💡"
                        class="pt-8"
                    >
                        <p>
                            My tech fascination started early—I was the kid dismantling computers (and rarely succeeding
                            in reassembling them). I played volleyball competitively, reaching Serie C, before switching
                            to
                            gym training. But my greatest passions? Music and food. Whether I'm coding to lo-fi beats or
                            cooking up a
                            storm in the kitchen, I believe in enjoying life's rhythms. 🎧 🍝
                        </p>
                    </Fieldset>
                </section>
                <section aria-labelledby="curiosities-section">
                    <h3 id="curiosities-section" class="sr-only">
                        Curiosities
                    </h3>
                    <Fieldset
                        key="Curiosities 🎨"
                        legend="Curiosities 🎨"
                        class="pt-8"
                    >
                        <p>
                            Since I was a child (around second or third grade), my favorite color has been 'sun yellow
                            modified with shades of red and orange.'
                            It’s a color I created in my mind and have carried with me ever since. However, I’ve never
                            been able to recreate it perfectly,
                            as I’ve never found a match that truly captures the image I have in my head.
                            But maybe, with your help, I can finally recreate that magnificent color!
                            Try picking a shade below—who knows, maybe you’ll be the one to... crack the code!
                        </p>
                        <ColorCuriosities/>
                    </Fieldset>
                </section>
            </template>
        </Card>
    </section>
</template>

<style scoped>

</style>
