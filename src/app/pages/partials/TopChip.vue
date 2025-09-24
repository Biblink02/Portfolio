<script setup lang="ts">
defineProps<{
    chipLabel: string
}>()
</script>

<template>
    <div aria-labelledby="chip-title">
        <h2
            id="chip-title"
            class="w-fit mx-auto text-xl rounded-xs custom-chip"
        >
            <Chip
                :label="chipLabel"
                :pt="{
                    root: {
                        style: {
                            borderRadius: 'var(--p-menubar-border-radius)',
                        },
                    },
                }"
            />
            <span class="sr-only">{{ chipLabel }}</span>
        </h2>
    </div>
</template>

<style scoped></style>
