<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import {ref} from 'vue'
import TopChip from './TopChip.vue'


const rawTabs = [
    {
        title: 'IT Internship 💻',
        content: `
            During the summer of 2020, I interned at an IT company in Conegliano as a tester and database analyst.
            My responsibilities included identifying and resolving database inconsistencies, verifying data accuracy,
            and eliminating duplicate entries. Additionally, I worked with 3D models, creating new designs that were
            subsequently integrated into the company's application. This role honed my attention to detail and problem-solving
            skills, deepening my interest in technology and database management.
        `
    },
    {
        title: 'Bachelor Thesis 🎓',
        content: `
            For my bachelor thesis, I developed and validated a flexible pressure sensor designed for an intelligent walker.
            The project involved prototyping with piezoresistive materials, implementing circuits with Arduino, and conducting
            experimental validation of sensitivity and reliability. The ultimate goal was to leverage the pressure data
            collected from the walker’s handles to train a machine learning algorithm capable of predicting the user’s
            intended turning direction.
            <div class="my-auto w-fit pt-4">
                <a href="/files/Alberto-Bottari-Bachelor-Thesis.pdf"
                   aria-label="Download Bachelor Thesis (Italian)"
                   download
                   class="text-xs px-2 py-1 rounded-md shadow border text-favourite_yellow hover:underline hover:underline-offset-3">
                    Download Bachelor Thesis (Italian)
                </a>
            </div>
        `
    },
    {
        title: 'Home Server with Proxmox 🖥️',
        content: `
            I set up a home server using Proxmox, where I learned how to manage virtual machines and containers.
            This experience allowed me to deepen my understanding of drivers, networking, bash scripting, and
            proxy/VPN configurations. It gave me practical skills in system administration and troubleshooting
            infrastructure-related issues.
        `
    },
    {
        title: 'Volunteering 🍴',
        content: `
            Since 2022, I have been volunteering at a local festival that attracts hundreds of attendees each evening.
            Initially, I served as a waiter, ensuring prompt and courteous service. Later, I transitioned to the kitchen,
            specializing in preparing grilled cheese. This experience has taught me to work effectively under pressure—
            after all, when a long line of hungry people is waiting, there's no room for hesitation!
        `
    },
    {
        title: 'School-Work Alternation Program 📚',
        content: `
            In 2019, I participated in a two-week school-work alternation program at the Mackenzie School of English
            in Edinburgh. Each day involved immersive English lessons and collaborative projects, culminating in a
            final presentation delivered entirely in English. This experience not only enhanced my language proficiency
            but also boosted my confidence in communicating within an international setting.
        `
    },
]

const tabs = rawTabs.map((tab, index) => ({
    ...tab,
    value: index,
}))
const active = ref(0)
</script>

<template>
    <section aria-labelledby="meaningful-experiences">
        <h2 id="meaningful-experiences" class="sr-only">
            Meaningful Experiences
        </h2>
        <TopChip chip-label="Meaningful Experiences" class="py-6 pt-6"/>

        <Panel class="headerless-panel p-1 sm:p-2">
            <Accordion v-model:value="active" class="pb-2">
                <AccordionPanel
                    v-for="tab in tabs"
                    :key="tab.value"
                    :value="tab.value"
                    :aria-labelledby="`tab-title-${tab.value}`"
                    role="tabpanel"
                >
                    <AccordionHeader
                        :id="`tab-title-${tab.value}`"
                        :aria-expanded="active === tab.value"
                        :aria-controls="`tab-content-${tab.value}`"
                        :class="{ 'active-header': active === tab.value }"
                    >
                        {{ tab.title }}
                    </AccordionHeader>
                    <AccordionContent :id="`tab-content-${tab.value}`">
                        <p class="m-0" v-html="tab.content"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </Panel>
    </section>
</template>

<style scoped>
.active-header {
    color: var(--color-favourite_yellow) !important;
}
</style>
