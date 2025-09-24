<script setup lang="ts">
const contacts = [
    {
        legend: 'Email',
        icon: 'pi pi-envelope',
        text: 'Email me at the following address:<br> alby.bot.24@gmail.com',
        href: 'mailto:alby.bot.24@gmail.com',
        ariaLabel: 'Send an email to alby.bot.24@gmail.com',
    },
    {
        legend: 'Telegram',
        icon: 'pi pi-telegram',
        text: 'Send me a message on Telegram:<br> Biblink02',
        href: 'https://t.me/Biblink02',
        ariaLabel: 'Contact me on Telegram at username Biblink02',
    },
    {
        legend: 'LinkedIn',
        icon: 'pi pi-linkedin',
        text: 'Find me on LinkedIn at the following profile:<br> Alberto Bottari',
        href: 'https://linkedin.com/in/alberto-bottari-biblink',
        ariaLabel: 'View my LinkedIn profile',
    },
    {
        legend: 'GitHub',
        icon: 'pi pi-github',
        text: 'Find me on GitHub at the following profile:<br> Biblink02',
        href: 'https://github.com/Biblink02',
        ariaLabel: 'View my GitHub profile',
    },
]
</script>

<template>
    <section aria-labelledby="contact-section">
        <h2 id="contact-section" class="sr-only">Contact Information</h2>
        <Card class="pb-12">
            <template #title>
                <div class="text-favourite_yellow">Get in touch:</div>
            </template>
            <template #content>
                <p class="pt-1 pb-10">
                    Feel free to contact me through the following methods for
                    any inquiries, collaborations, or further information.
                </p>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    <div
                        v-for="contact in contacts"
                        :key="contact.legend"
                        role="listitem"
                    >
                        <Fieldset>
                            <template #legend>
                                <div class="flex items-center pl-2">
                                    <i
                                        :class="contact.icon"
                                        aria-hidden="true"
                                    ></i>
                                    <span class="font-bold p-2">{{
                                        contact.legend
                                    }}</span>
                                </div>
                            </template>
                            <a
                                :href="contact.href"
                                :aria-label="contact.ariaLabel"
                                target="_blank"
                                rel="noopener noreferrer"
                                v-html="contact.text"
                            />
                        </Fieldset>
                    </div>
                </div>
            </template>
        </Card>
    </section>
</template>

<style scoped></style>
