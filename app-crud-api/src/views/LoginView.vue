<template>
  <div class="container mt-5">
    <div class="card p-4">
      <h2>Iniciar sesión</h2>

      <div
        v-if="error"
        class="alert alert-danger"
      >
        {{ error }}
      </div>

      <input
        v-model="username"
        class="form-control mb-3"
        placeholder="Usuario"
      >

      <input
        v-model="password"
        type="password"
        class="form-control mb-3"
        placeholder="Contraseña"
      >

      <button
        class="btn btn-primary"
        @click="login"
      >
        Ingresar
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authService from '@/services/authService'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref(null)

    const router = useRouter()

    const login = () => {
      const success =
        authService.login(
          username.value,
          password.value
        )

      if (success) {
        router.push('/')
      } else {
        error.value =
          'Usuario o contraseña incorrectos'
      }
    }

    return {
      username,
      password,
      error,
      login
    }
  }
}
</script>