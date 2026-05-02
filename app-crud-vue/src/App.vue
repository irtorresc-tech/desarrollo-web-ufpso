<template>
  <div id="app">
    <h1>¡Vue está funcionando!</h1>
    <p>Router: {{ $route.path }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
}
</style>