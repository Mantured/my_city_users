<template>
  <div id="app">
    <nav class="flex justify-center bg-gray-800 p-4">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/signup" class="nav-link">Registrazione</router-link>
      <router-link to="/user-list" class="nav-link">Lista Utenti</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav-link {
  padding: 0.75rem 1.5rem;
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  background-color: #4a90e2;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #357bd8;
}
</style>
