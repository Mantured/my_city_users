<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full md:w-1/2 p-6 bg-gray-800 shadow-app-1 rounded-lg space-x-4">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold">Benvenuto</h2>
        <p class="mt-2 text-center text-sm text-gray-500">Registrati per accedere alla lista degli utenti.</p>
      </div>
      <router-link to="/signup">
        <button class="flex mx-auto justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Registrati
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
