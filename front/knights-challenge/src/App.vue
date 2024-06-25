<script setup>
  import { ref } from 'vue';
  let num = ref(0)

</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://images.vexels.com/media/users/3/320573/isolated/preview/6eeb1016b121bd4875176b8e0279620f-cavaleiro-brandindo-uma-espada.png" alt="Bootstrap" width="70" height="70">
        Knights Challenge
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <div class="main">
    <router-view></router-view>
  </div>

  <!-- Footer -->
  <footer class="bg-primary text-light text-center">
    <p  class="mt-3">Feito com carinho por Gabriel Eduardo</p>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center; /* Correção: 'align-item' para 'align-items' */
  justify-content: center;
  height: 56px;
}
</style>