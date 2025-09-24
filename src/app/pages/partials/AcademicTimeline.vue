<script setup lang="ts">
import { ref } from 'vue'
import { curriculumImages } from '../../ts/ImageHelper'
import TopChip from './TopChip.vue'
import { getCssVar } from '../../ts/Utils'

const events = ref([
    {
        status: 'University of Padua: Master Degree',
        date: '2024 - Present',
        color: 'orange',
        image: curriculumImages.master_degree,
        description:
            "I am currently pursuing a Master's Degree in Computer Engineering at the University of Padua, specializing in Web Information and Data Engineering.",
        icon: 'pi pi-graduation-cap',
    },
    {
        status: "University of Padua: Bachelor's Degree",
        date: '2021 - 2024',
        color: 'orange',
        image: curriculumImages.bachelor_degree,
        description:
            "I earned my Bachelor's Degree in Computer Engineering from the University of Padua, graduating on July 17, 2024, with a final score of 110/110 cum laude.",
        icon: 'pi pi-graduation-cap',
    },
    {
        status: 'Liceo Scientifico',
        date: '2016 - 2021',
        color: 'orange',
        image: curriculumImages.isiss_casagrande,
        description:
            'I graduated from ISISS Marco Casagrande in Pieve di Soligo with a Scientific High School diploma (Applied Sciences track), achieving a final score of 100/100.',
        icon: 'pi pi-book',
    },
    {
        status: 'Born',
        date: '24/11/2002',
        color: 'orange',
        image: curriculumImages.birth,
        description:
            'I was born on November 24, 2002, in Conegliano, a town in the province of Treviso, Veneto, Italy.',
        icon: 'pi pi-star',
    },
])
</script>

<template>
    <section aria-labelledby="academic-timeline">
        <h2 id="academic-timeline" class="sr-only">Academic Timeline</h2>
        <TopChip chip-label="Academic Timeline" class="pb-6" />

        <!-- Large Screen Timeline -->
        <div class="hidden sm:block">
            <Timeline :value="events" align="alternate">
                <template #marker="slotProps">
                    <span
                        class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
                        :style="{
                            backgroundColor: getCssVar(
                                '--color-favourite_yellow'
                            ),
                        }"
                    >
                        <i :class="slotProps.item.icon" aria-hidden="true"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card class="mt-4">
                        <template #title>
                            {{ slotProps.item.status }}
                        </template>
                        <template #subtitle>
                            {{ slotProps.item.date }}
                        </template>
                        <template #content>
                            <section class="flex flex-col space-y-2">
                                <img
                                    v-if="slotProps.item.image"
                                    :src="slotProps.item.image"
                                    :alt="`Image representing ${slotProps.item.status}`"
                                    width="200"
                                    class="shadow-sm rounded-md bg-white mx-auto"
                                />
                                <p>{{ slotProps.item.description }}</p>
                            </section>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>

        <!-- Mobile Timeline -->
        <div class="sm:hidden block">
            <Timeline
                :value="events"
                align="left"
                :pt="{ eventOpposite: { style: 'flex: unset' } }"
            >
                <template #marker="slotProps">
                    <span
                        class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
                        :style="{ backgroundColor: slotProps.item.color }"
                    >
                        <i :class="slotProps.item.icon" aria-hidden="true"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card class="mt-4">
                        <template #title>
                            {{ slotProps.item.status }}
                        </template>
                        <template #subtitle>
                            {{ slotProps.item.date }}
                        </template>
                        <template #content>
                            <section class="flex flex-col space-y-2">
                                <img
                                    v-if="slotProps.item.image"
                                    :src="slotProps.item.image"
                                    :alt="`Image representing ${slotProps.item.status}`"
                                    width="200"
                                    class="shadow-sm rounded-md bg-white mx-auto"
                                />
                                <p>{{ slotProps.item.description }}</p>
                            </section>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>
    </section>
</template>

<style scoped></style>
