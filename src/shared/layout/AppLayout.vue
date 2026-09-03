<script setup lang="js">
import Topbar from "../components/TopBar.vue";
import Aside from "../components/Aside.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-fundo-secundario">
    <Topbar />
    <section class="flex min-h-0 flex-1">
      <Aside/>
      <main class="flex flex-1 min-w-0 items-center justify-center">
        <RouterView />
      </main>
    </section>
  </div>
</template>
