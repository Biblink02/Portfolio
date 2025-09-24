<script setup lang="ts">
import ColorCuriosities from '../partials/ColorCuriosities.vue'
import { personalInfoCarousel, responsiveOptions } from '../../ts/ImageHelper'

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

const fields = [
    {
        header: 'Languages 🖥️',
        description:
            'C++ has always been a language I truly enjoy, but over time, I’ve explored more modern ones and found a particular liking for Kotlin. However, the languages I currently know best are PHP and TypeScript. As for frontend frameworks, I love working with Vue.js.',
        specs: '📝 C++, Kotlin, TypeScript, PHP, Vue.js, JavaScript, HTML, CSS.',
    },
    {
        header: 'Technologies 🤖',
        description:
            'As a Full-Stack Developer, I use Laravel with Filament for fast backend development and Vue with PrimeVue + Tailwind CSS for modern UIs. I deploy efficiently with Docker and have set up my own VPS, configuring the server with Proxmox VE and Proxmox BS for virtualization and backups. I’m highly proficient with Git, having worked on multiple team projects.',
        specs: '🚀 Git, Docker, Proxmox VE, Proxmox BS, Laravel, Filament, PrimeVue, Tailwind CSS.',
    },
    {
        header: 'Passions 💡',
        description: `My tech fascination started early—I was the kid dismantling computers (and rarely succeeding in
            reassembling them). I played volleyball competitively, reaching Serie C, before switching to gym training. But
            my greatest passions? Music and food. Whether I'm coding to lo-fi beats or cooking up a storm in the kitchen,
            I believe in enjoying life's rhythms. 🎧 🍝`,
    },
    {
        header: 'Curiosities 🎨',
        description: `Since I was a child (around second or third grade), my favorite color has been 'sun yellow modified with shades of red and orange.'
            It’s a color I created in my mind and have carried with me ever since. However, I’ve never been able to recreate it perfectly,
            as I’ve never found a match that truly captures the image I have in my head.
            But maybe, with your help, I can finally recreate that magnificent color!
            Try picking a shade below—who knows, maybe you’ll be the one to... crack the code!`,
    },
]
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
                        <p v-html="part.text" />
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
                        v-for="field in fields"
                        :key="field.header"
                        :legend="field.header"
                        class="pt-8"
                    >
                        <p v-html="field.description" />
                        <Panel
                            class="headerless-panel w-fit mx-auto mt-3"
                            v-if="field.specs"
                        >
                            <p class="p-1" v-html="field.specs" />
                        </Panel>
                        <div v-if="field.header === 'Curiosities 🎨'">
                            <ColorCuriosities />
                        </div>
                    </Fieldset>
                </section>
            </template>
        </Card>
    </section>
</template>

<style scoped></style>
