<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    
    <input 
      v-model="usuario" 
      type="text" 
      placeholder="Usuario"
      class="input-field"
    />
    
    <input 
      v-model="clave" 
      type="password" 
      placeholder="Contraseña"
      class="input-field"
    />
    
    <button @click="login" class="btn-login">
      Entrar
    </button>
    
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<script>
import users from '@/assets/usuarios.json'

export default {
  name: 'LoginView',
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const valido = users.find(
        u => u.userName === this.usuario && u.password === this.clave
      )

      if (valido) {
        localStorage.setItem('logueado', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Credenciales incorrectas'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f0f0;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  color: #333;
  font-size: 28px;
}

.input-field {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn-login {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.btn-login:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 15px;
  max-width: 300px;
}
</style>