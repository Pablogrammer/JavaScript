<script setup>
import { ref, onMounted } from 'vue'
import cabecera  from "./components/Cabecera.vue";
import Footer from "./components/Footer.vue";

const loading = ref(true)

onMounted(() => {
  // Aquí obtén los datos
  // Cuando se hayan obtenido, establece loading en false después de 2 segundos
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
      <cabecera></cabecera>
    

  <main>
    <div v-if="loading" class="preload"></div>
    <div v-else> <router-view></router-view> </div>
  </main>

    <footer><Footer></Footer></footer>

</template>

<style scoped>

header{
    width: 100vw;
    margin: 2rem;
  }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.preload {
  width: 60px;
  height: 60px;
  border: 8px solid #ffffff;
  border-top: 8px solid #db34b1;
  border-radius: 50%;
  animation: spin 0.8s ease-in-out infinite;
  margin: 0 auto;
  backdrop-filter: blur(100px);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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


}
</style>
