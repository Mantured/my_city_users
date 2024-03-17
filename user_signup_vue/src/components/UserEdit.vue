<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full md:w-1/2 p-6 bg-gray-800 shadow-app-1 rounded-lg">
      <h1 class="text-3xl font-bold mb-4">Modifica Utente</h1>
      <form @submit.prevent="submitForm"  class="grid grid-cols-4 gap-4 text-amber-500">
        <div class="col-span-2">
          <label for="firstname" class="block text-sm font-medium text-gray-200">Nome</label>
          <input ref="firstnameInput" v-model="formData.firstname"  @input="firstNameTouched = true" id="firstname" name="firstname" type="text" required pattern="[a-zA-Z]+" placeholder="Nome" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="firstNameTouched && !$refs.firstnameInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un nome valido (solo lettere).</p>
        </div>
        <div class="col-span-2">
          <label for="lastname" class="block text-sm font-medium text-gray-200">Cognome</label>
          <input ref="lastnameInput" v-model="formData.lastname" @input="lastNameTouched = true" id="lastname" name="lastname" type="text" required pattern="[a-zA-Z]+" placeholder="Cognome" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="lastNameTouched && !$refs.lastnameInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un nome valido (solo lettere).</p>
        </div>
        <div class="col-span-2">
          <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
          <input ref="emailInput" v-model="formData.email" @input="emailTouched = true" id="email" name="email" type="email"  required placeholder="Email" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="emailTouched && !$refs.emailInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un'email valida.</p>
        </div>
        <div class="col-span-2">
          <label for="phone" class="block text-sm font-medium text-gray-200">Numero di Telefono</label>
          <input ref="phoneInput" v-model="formData.phone" @input="phoneTouched = true" id="phone" name="phone" type="tel" required placeholder="Numero di Telefono" class="appearance-none bg-white bg-opacity-5 border border-opacity-20 border-white rounded-md text-white py-3 px-4 w-full outline-none" />
          <p v-if="phoneTouched && !$refs.phoneInput.checkValidity()" class="text-red-500 text-sm mt-1">Inserisci un numero di telefono valido.</p>
        </div>
        <div class="col-span-4 flex justify-center">
          <button type="submit" class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Salva Modifiche </button>
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
        phone : '',
      },
      firstNameTouched: false,
      lastNameTouched: false,
      emailTouched: false,
      phoneTouched: false,
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
        const userData = response.data;
        this.formData.firstname = userData.firstname;
        this.formData.lastname = userData.lastname;
        this.formData.email = userData.email;
        this.formData.phone = userData.phone;
      } catch (error) {
        console.error('Errore durante il recupero dei dettagli dell\'utente:', error);
      }
    },
    async submitForm() {
      try {
        const userId = this.$route.params.id;
        if (
            this.$refs.firstnameInput.checkValidity() &&
            this.$refs.lastnameInput.checkValidity() &&
            this.$refs.emailInput.checkValidity() &&
            this.$refs.phoneInput.checkValidity()
        ){
          await axios.put(`http://localhost:8000/api/users/${userId}`, this.formData);
          this.$router.push({name: 'UserDetails', params: {id: userId}});
        }
      } catch (error) {
        console.error('Errore durante la modifica dell\'utente:', error);
      }
    },
  },
};
</script>
