<script setup lang="js">
import {
  Wallet,
  Cog,
  ChevronRight,
  House,
  Flame,
  ShoppingCart,
  Users,
  ArrowDownToLine,
  Dices
} from "lucide-vue-next";
import NavigationAside from "./NavigationAside.vue";
import { ref } from "vue";

const config = ref(true);
</script>

<template>
  <div class="w-20 rounded-MD bg-fundo-principal border-r border-zinc-700">
    <div class="flex mt-4 items-center gap-4 flex-col">
      <NavigationAside to="/adefinir" :icon="House" />
      <NavigationAside to="/adefinir" :icon="Dices"/>
      <hr class="text-black h-2 w-full" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Wallet" />
      <NavigationAside to="/adefinir" :icon="Flame" />
      <NavigationAside to="/adefinir" :icon="Users" />
      <NavigationAside to="/adefinir" :icon="ShoppingCart" />
      <hr class="text-black h-2 w-full" />
      <section class="relative mb-auto">
        <NavigationAside to="/adefinir" :icon="ArrowDownToLine" />
        <div @click="config = !config">
          <span v-if="config"> <NavigationAside :icon="Cog" /></span>
          <div v-else>
            <NavigationAside :icon="Cog" />
            <section
              class="w-50 z-10 fixed h-64 bg-fundo-principal text-white bottom-1 left-20 rounded-md flex flex-col"
            >
              <div class="flex p-2 font-semibold flex-col gap-4">
                <span>Settings</span>
                <hr />
                <span>Comand</span>
                <span>Extensions</span>
                <span>Prozzfiles</span>
                <hr>
                <span class="flex cursor-pointer gap-5"
                  >Dowload Update <ChevronRight
                /></span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
