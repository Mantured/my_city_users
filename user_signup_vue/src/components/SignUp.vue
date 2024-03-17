<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full md:w-1/2 p-6 bg-gray-800 shadow-app-1 rounded-lg">
      <h1 class="text-3xl font-bold mb-4">Registra Utente</h1>
      <form @submit.prevent="submitForm" class="grid grid-cols-4 gap-4 text-amber-500">
        <div class="col-span-2">
          <label for="firstname" class="block text-sm font-medium text-gray-200">Nome</label>
          <input ref="firstnameInput" v-model="formData.firstname" id="firstname" name="firstname" type="text" required pattern="[a-zA-Z]+" placeholder="Nome" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="$refs.firstnameInput && !$refs.firstnameInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un nome valido (solo lettere).</p>
        </div>
        <div class="col-span-2">
          <label for="lastname" class="block text-sm font-medium text-gray-200">Cognome</label>
          <input ref="lastnameInput" v-model="formData.lastname" id="lastname" name="lastname" type="text" required pattern="[a-zA-Z]+" placeholder="Cognome" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="$refs.lastnameInput && !$refs.lastnameInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un nome valido (solo lettere).</p>
        </div>
        <div class="col-span-2">
          <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
          <input ref="emailInput" v-model="formData.email" id="email" name="email" type="email" required placeholder="Email" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="$refs.emailInput && !$refs.emailInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un'email valida.</p>
        </div>
        <div class="col-span-2">
          <label for="phone" class="block text-sm font-medium text-gray-200">Numero di Telefono</label>
          <input ref="phoneInput" v-model="formData.phone" id="phone" name="phone" type="tel" required placeholder="Numero di Telefono" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="$refs.phoneInput && !$refs.phoneInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un numero di telefono valido.</p>
        </div>
        <div class="col-span-2">
          <label for="password" class="block text-sm font-medium text-gray-200">Password</label>
          <input ref="passwordInput" v-model="formData.password" id="password" name="password" type="password" required minlength="8" placeholder="Password (almeno 8 caratteri)" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="$refs.passwordInput && !$refs.passwordInput.checkValidity()" class="text-red-500 text-sm mt-1">La password deve contenere almeno 8 caratteri.</p>
        </div>
        <div class="col-span-2">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-200">Conferma Password</label>
          <input ref="confirmPasswordInput" v-model="confirmPassword" id="confirmPassword" name="confirmPassword" type="password" required minlength="8" placeholder="Conferma Password" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="confirmPassword !== '' && confirmPassword !== formData.password" class="text-red-500 text-sm mt-1">Le password non corrispondono.</p>
        </div>
        <div class="col-span-4 flex justify-center">
          <button type="submit" class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrati</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        active: true
      },
      confirmPassword: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        if (
            this.$refs.firstnameInput.checkValidity() &&
            this.$refs.lastnameInput.checkValidity() &&
            this.$refs.emailInput.checkValidity() &&
            this.$refs.phoneInput.checkValidity() &&
            this.$refs.passwordInput.checkValidity() &&
            this.confirmPassword === this.formData.password
        ) {
          const response = await axios.post('http://localhost:8000/api/users', this.formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response.data);
          this.$router.push('/user-list');
        }
      } catch (error) {
        if (error.response && error.response.status === 422 && error.response.data.errors && error.response.data.errors.email) {
          alert(error.response.data.errors.email[0]);
        } else {
          console.error('Errore durante la registrazione:', error);
        }
      }
    }
  }
};
</script>
