<script setup lang="ts">
import { computed, ref } from 'vue'

const originalColor = '#FFAA00'
const customColor = ref(originalColor.toString())

const colorLabel = computed(() =>
    customColor.value !== originalColor ? 'Your' : 'My'
)

const color = computed(() =>
    customColor.value !== originalColor
        ? '#' + customColor.value.toUpperCase()
        : originalColor
)

const forceUpdate = ref(1)
</script>

<template>
    <section
        aria-labelledby="color-picker-section"
        class="flex flex-row space-x-4 place-content-center mt-2"
    >
        <h2 id="color-picker-section" class="sr-only">
            Color Picker Selection
        </h2>

        <!-- Color Picker with Accessibility Enhancements -->
        <ColorPicker
            v-model="customColor"
            class="custom-colorpicker my-auto"
            :key="forceUpdate"
            aria-label="Select a custom color"
        />

        <!-- Display chosen color -->
        <p class="my-auto" role="status" aria-live="polite">
            {{ colorLabel }} chosen (hex) color:
            <span
                :style="{ color: color }"
                class="text-lg w-10 text-center font-mono m-auto"
                >{{ color }}</span
            >

            <!-- Restore Button -->
            <button
                :class="[
                    'pl-4 m-auto font-mono',
                    customColor === originalColor
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer underline',
                ]"
                :aria-disabled="customColor === originalColor"
                @click="((customColor = originalColor), forceUpdate++)"
            >
                [restore]
            </button>
        </p>
    </section>
</template>

<style scoped>
.custom-colorpicker {
    --p-colorpicker-preview-width: 2rem;
    --p-colorpicker-preview-height: 2rem;
}
</style>
