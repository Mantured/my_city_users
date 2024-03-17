<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div v-if="loading" class="text-center">
      <svg class="animate-spin h-10 w-10 text-white mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 014.708 4.7h2.585A9.956 9.956 0 0012 2c5.523 0 10 4.477 10 10h-2c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 1.075.214 2.104.608 3.056l1.387-.743zM12 22c-1.117 0-2.191-.172-3.213-.491l-1.387.743A9.956 9.956 0 0012 22zm6.292-6.292A8.002 8.002 0 0119.293 19.3l1.387.743A9.956 9.956 0 0022 12c0-5.523-4.477-10-10-10V2c5.522 0 10 4.477 10 10h-2c0-1.075-.214-2.104-.608-3.056l-1.387.743zM4.708 19.3A8.002 8.002 0 012 12c0-1.075.214-2.104.608-3.056l-1.387-.743A9.956 9.956 0 000 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8h2c0 5.523-4.477 10-10 10z"></path>
      </svg>
      <p class="text-gray-300">Caricamento in corso...</p>
    </div>
    <div v-else class="w-full md:w-1/2 p-6 bg-gray-800 shadow-app-1 rounded-lg">
      <h1 class="text-3xl font-bold mb-4">Dettagli Utente</h1>
      <div class="bg-gray-700 rounded-lg p-6">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-2">
            <div class="mb-4">
              <p class="text-xl font-medium text-gray-200">Nome:</p>
              <p class="text-lg text-gray-400">{{ user.firstname }}</p>
            </div>
          </div>
          <div class="col-span-2">
            <div class="mb-4">
              <p class="text-xl font-medium text-gray-200">Cognome:</p>
              <p class="text-lg text-gray-400">{{ user.lastname }}</p>
            </div>
          </div>
          <div class="col-span-2">
            <div class="mb-4">
              <p class="text-xl font-medium text-gray-200">Email:</p>
              <p class="text-lg text-gray-400">{{ user.email }}</p>
            </div>
          </div>
          <div class="col-span-2">
            <div class="mb-4">
              <p class="text-xl font-medium text-gray-200">Phone:</p>
              <p class="text-lg text-gray-400">{{ user.phone }}</p>
            </div>
          </div>
        </div>
        <router-link :to="{ path: `/user/edit/${user.id}` }" class="text-sm font-medium text-blue-500 hover:text-blue-700">Modifica</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {},
      loading: true,
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const userId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
        this.user = response.data;
      } catch (error) {
        console.error('Errore durante il recupero dei dettagli dell\'utente:', error);
      }finally {
        this.loading = false;
      }
    },
  },
};
</script>
