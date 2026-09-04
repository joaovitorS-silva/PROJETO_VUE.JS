<script setup lang="js">
import Topbar from "../components/TopBar.vue";
import Aside from "../components/Aside.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-fundo-secundario">
    <Topbar />
    <section class="flex min-h-0 flex-1">
      <Aside/>
      <main class="ml-4">
        <RouterView />
      </main>
    </section>
  </div>
</template>
