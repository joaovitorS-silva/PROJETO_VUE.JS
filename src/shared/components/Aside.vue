<script setup lang="js">
import { Wallet, Cog } from "lucide-vue-next";
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
      <section class="relative">
        <NavigationAside to="/adefinir" :icon="Wallet" />
        <div @click="config = !config">
          <span v-if="config"> <NavigationAside :icon="Cog" /></span>
          <div v-else>
            <NavigationAside :icon="Cog" />
            <div
              class="w-64 absolute h-32 bg-amber-600 text-white bottom-0 left-10 rounded-2xl flex flex-col"
            >
              <span>settings</span>
              <span>themes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
