<script setup lang="js">
import { Wallet } from "lucide-vue-next";
import NavigationAside from "./NavigationAside.vue";
import { ref } from "vue";

const config = ref(false);
</script>

<template>
  <div class="w-20 rounded-MD bg-fundo-principal border-r border-zinc-700">
    <div class="flex mt-4 items-center gap-4 flex-col">
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <hr class="text-black h-2 w-full" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <hr class="text-black h-2 w-full" />
      <section>
        <NavigationAside to="/adefinir" :icon="Wallet" />
        <NavigationAside :icon="Wallet" />
      </section>
    </div>
  </div>
</template>
