<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

import { ref, watchEffect } from "vue";

const API_URL = `http://localhost:8080`;
const results = ref(null);

async function fetchData() {
  const url = `${API_URL}/customers`;
  results.value = (await (await fetch(url)).json())["_embedded"]["customers"];
}

async function addData() {
  const url = `${API_URL}/customers`;
  const formData = new FormData();
  await (
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ firstName: "hello", lastName: "world" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <ul>
      <li v-for="res in results">{{ res.firstName }} {{ res.lastName }}</li>
    </ul>
    <button @click="fetchData">get</button>
    <button @click="addData">add</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
