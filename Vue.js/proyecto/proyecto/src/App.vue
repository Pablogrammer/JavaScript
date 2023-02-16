<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <nav>
    <router-link to="/">INICIO</router-link> |
    <router-link to="/about">BIENVENIDA</router-link> |
    <router-link to="/register">REGISTER</router-link> |
    <router-link to="/private">PRIVATE</router-link> |

  </nav>
  <header>

    <h1>Mi proyecto de autentificación</h1>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
