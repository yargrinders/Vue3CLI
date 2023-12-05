<!-- src/sections/TestSection.vue -->
<template>
    <div>
        <h2>Test Section</h2>
        <p>API шутки про Чака Норриса</p>
        <p>{{ joke }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            joke: 'Loading joke...',
        };
    },cd
    mounted() {
        this.fetchJoke();
    },
    methods: {
        async fetchJoke() {
            try {
                const response = await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
                this.joke = response.data.joke;
            } catch (error) {
                console.error('Error fetching joke:', error);
                this.joke = 'Failed to fetch joke.';
            }
        },
    },
};
</script>

<style>
/* Стили для TestSection */
</style>
