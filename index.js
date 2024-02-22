#!/usr/bin/env node

const axios = require('axios');

async function getRandomJoke() {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = response.data;
        console.log(`${joke.setup}\n${joke.punchline}`);
    } catch (error) {
        console.error('Could not fetch a joke 😞', error);
    }
}

getRandomJoke();
