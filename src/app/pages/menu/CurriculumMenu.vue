<script setup lang="ts">
import AcademicTimeline from '../partials/AcademicTimeline.vue'
import MeaningfulExperiences from '../partials/MeaningfulExperiences.vue'
</script>

<template>
    <section aria-labelledby="academic-section">
        <h2 id="academic-section" class="sr-only">Academic Timeline</h2>
        <AcademicTimeline class="pb-6" />
    </section>

    <section aria-labelledby="experiences-section">
        <h2 id="experiences-section" class="sr-only">Meaningful Experiences</h2>
        <MeaningfulExperiences />
    </section>
</template>

<style scoped></style>
