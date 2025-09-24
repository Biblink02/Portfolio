<script setup lang="ts">
import tetris from '~/images/projects/tetris.png'
import capricciosa1 from '~/images/projects/capricciosa/capricciosa1.png'
import capricciosa2 from '~/images/projects/capricciosa/capricciosa2.png'
import capricciosa3 from '~/images/projects/capricciosa/capricciosa3.png'
import soleazzurro1 from '~/images/projects/soleazzurro/soleazzurro1.png'
import soleazzurro2 from '~/images/projects/soleazzurro/soleazzurro2.png'
import soleazzurro3 from '~/images/projects/soleazzurro/soleazzurro3.png'
import soleazzurro4 from '~/images/projects/soleazzurro/soleazzurro4.png'
import soleazzurro5 from '~/images/projects/soleazzurro/soleazzurro5.png'
import economy1 from '~/images/projects/economy-tracker/economy1.jpg'
import economy2 from '~/images/projects/economy-tracker/economy2.jpg'
import economy3 from '~/images/projects/economy-tracker/economy3.jpg'
import battleship1 from '~/images/projects/battleship/battleship1.png'
import battleship2 from '~/images/projects/battleship/battleship2.png'
import klotski1 from '~/images/projects/klotski/klotski1.png'
import klotski2 from '~/images/projects/klotski/klotski2.png'
import klotski3 from '~/images/projects/klotski/klotski3.png'
import klotski4 from '~/images/projects/klotski/klotski4.png'
import klotski5 from '~/images/projects/klotski/klotski5.png'
import radioline1 from '~/images/projects/radioline/radioline1.png'
import radioline2 from '~/images/projects/radioline/radioline2.png'
import radioline3 from '~/images/projects/radioline/radioline3.png'
import radioline4 from '~/images/projects/radioline/radioline4.png'
import radioline5 from '~/images/projects/radioline/radioline5.png'


const projects = [
    {
        name: 'Tetris Clone',
        languages: 'C++',
        link: 'https://github.com/Biblink02/Tetris',
        description:
            'A basic Tetris clone developed in C++ using the SFML graphics library, featuring classic gameplay mechanics and smooth graphics rendering. Built with CMake and compatible with C++14.',
        images: [{image: tetris}],
        icon: 'pi-star',
    },
    {
        name: 'MedjugorjeService Website',
        languages: 'PHP, TypeScript, Vue',
        link: 'https://medjugorjeservice.com',
        description:
            'A Laravel + Inertia.js + Vue.js management platform with a FilamentPHP admin to handle loan orders of prayer-group radios, auto-generating branded PDF documents; built with a strong SEO foundation (schema.org, clean URLs, sitemaps, hreflang) and Google-friendly multilingual support.',
        images: [
            {image: radioline1},
            {image: radioline2},
            {image: radioline3},
            {image: radioline4},
            {image: radioline5},
        ],
        icon: 'pi-globe',
    },
    {
        name: 'Capricciosa Website',
        languages: 'PHP, TypeScript, Vue',
        link: 'https://capricciosapizzerie.it/',
        description:
            'A website built with Laravel, Inertia.js, and Vue.js, featuring an admin panel for managing menus and events, developed using FilamentPHP.',
        images: [
            {image: capricciosa1},
            {image: capricciosa2},
            {image: capricciosa3},
        ],
        icon: 'pi-globe',
    },
    {
        name: 'SoleAzzurroCucce E-Commerce',
        languages: 'PHP, TypeScript, Vue',
        link: 'https://github.com/Biblink02/SoleAzzurroGestionale',
        description: `An independent e-commerce website built with Laravel, Inertia.js, and Vue.js (TypeScript), featuring a
             seamless authentication system that supports login and registration via email,Google, and Facebook.
             Payments are securely processed through the Nexi platform, ensuring a smooth checkout experience.
             The platform includes a fully comprehensive admin panel for managing orders,products, users, and all
             essential e-commerce operations. Designed with a modern and minimalist aesthetic,the interface reflects
             the high-end nature of the products, offering an elegant and intuitive shopping experience for users.`,
        images: [
            {image: soleazzurro1},
            {image: soleazzurro2},
            {image: soleazzurro3},
            {image: soleazzurro4},
            {image: soleazzurro5},
        ],
        icon: 'pi-shopping-cart',
    },
    {
        name: 'Economy-Tracker Android Application',
        languages: 'Kotlin',
        link: 'https://github.com/Fireentity/economy-tracker',
        description: `Economy Tracker is an Android app built with Kotlin and Jetpack Compose to track personal finances.
            It lets users log transactions, categorize expenses, and generate monthly summaries. The project is divided
            into three modules: common-backend (shared logic), xml-frontend (traditional UI), and jetpack-compose-backend
            (modern UI). My main role was in xml-frontend and common-backend, focusing on UI development and shared logic.
            The project is developed as part of the Embedded Systems Programming course and is designed for seamless integration within the Android ecosystem.`,
        images: [{image: economy1}, {image: economy2}, {image: economy3}],
        icon: 'pi-android',
    },
    {
        name: 'Klotski Game (as Web app)',
        languages: 'Java, TypeScript, Vue',
        link: 'https://github.com/Fireentity/klotski-web',
        description: `A Klotski web app built with Java Spring Boot for the backend and Vue.js with TailwindCSS and
         TypeScript for the frontend. Players can authenticate to save and manage their games, ensuring progress is
         always tracked. The game includes a hint system to assist when stuck. Fully containerized, it runs seamlessly
         using Docker Compose.`,
        images: [
            {image: klotski1},
            {image: klotski2},
            {image: klotski3},
            {image: klotski4},
            {image: klotski5},
        ],
        icon: 'pi-star',
    },
    {
        name: 'Modified-Battleship Game',
        languages: 'C++',
        link: 'https://github.com/Fireentity/modified-battleship',
        description: `A C++ command-line battleship game featuring ships with unique abilities, such as repositioning or
            using a radar attack to detect enemies. Players can face another human, an AI, or watch AI vs AI matches. The
            game is structured into two separate modules: one for gameplay and one for replay building, allowing step-by-step
            match replays. Built with CMake for easy compilation and cross-platform support.`,
        images: [{image: battleship1}, {image: battleship2}],
        icon: 'pi-star',
    },
]
</script>

<template>
    <section aria-labelledby="projects-section">
        <h2 id="projects-section" class="sr-only">Projects</h2>

        <Panel
            v-for="(project, index) in projects"
            :key="project.name"
            :aria-labelledby="`project-${index}`"
            role="article"
            :toggleable="true"
            class="mb-8"
        >
            <template #header>
                <div class="flex items-center gap-2">
                    <span
                        :class="['text-favourite_yellow pi', project.icon]"
                        aria-hidden="true"
                    />
                    <span class="font-bold" :id="`project-${index}`">{{
                            project.name
                        }}</span>
                </div>
            </template>
            <template #icons>
                <Button
                    as="a"
                    :href="project.link"
                    target="_blank"
                    icon="pi pi-arrow-up-right"
                    severity="secondary"
                    rounded
                    text
                    aria-label="Visit project repository"
                />
            </template>
            <h3 class="text-gray-400 text-sm pb-4">{{ project.languages }}</h3>
            <div class="flex flex-col md:flex-row gap-4">
                <!-- Description -->
                <p :class="['w-full', index % 2 == 0 ? 'md:order-none' : 'md:order-2',]">
                    {{ project.description }}
                </p>


                <!-- Carousel -->
                <div :class="['w-full',index % 2 == 0 ? 'md:order-none' : 'md:order-1',]">
                    <Carousel
                        :value="project.images"
                        :show-navigators="project.images.length > 1"
                        :show-indicators="project.images.length > 1"
                        circular
                        :autoplay-interval="0"
                        class="custom-carousel"
                    >
                        <template #item="slotProps">
                            <Image
                                :src="slotProps.data.image"
                                :alt="slotProps.data.alt"
                                preview
                                :pt="{
                                    root: { class: 'flex items-center justify-center w-full h-64 rounded-md bg-transparent' },
                                    preview: { class: 'flex items-center justify-center w-full h-full bg-transparent' },
                                    previewImage: { class: 'max-h-[80vh] max-w-[90vw] object-contain object-center' }
                                }"
                                imageClass="max-h-full max-w-full object-contain object-center cursor-zoom-in"
                            />
                        </template>
                    </Carousel>
                </div>
            </div>
        </Panel>
    </section>
</template>

<style scoped></style>
