<script setup lang="js">
import {
  Search,
  Wallet,
  Users,
  MessageSquareText,
  Bell,
} from "lucide-vue-next";
import imgTeste from "/src/App/assets/teste4.webp";
import Navigation from "./NavigationTop.vue";
</script>

<template>
  <div class="mt-0 gap-10 py-5 flex bg-fundo-principal w-full text-white">
    <img
      class="w-10"
      src="https://imgs.search.brave.com/VJNH2i52ous-w8yWHFx-YUp0wBLrJvnftTw3CxAlDQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9hby1jb250/cm9sZS1pY29uLXN2/Zy1kb3dubG9hZC1w/bmctMTIyODc2My5w/bmc_Zj13ZWJwJnc9/MTI4"
      alt="dasdasdas"
    />

    <div class="relative">
      <Search class="absolute left-2 bottom-3 cursor-pointer" size="24px" />
      <input
        type="text"
        placeholder="Buscar jogos,gẽneros,etc..."
        class="bg-fundo-secundario rounded-2xl p-3 pl-9"
      />
    </div>
    <section class="flex ml-auto gap-8 text-cards">
      <Navigation :icon="Wallet" label="5,49USD" to="definir rota" />
      <Navigation :icon="Users" to="a denifir" />
      <Navigation :icon="MessageSquareText" to="/a definmir" />
      <Navigation :icon="Bell" to="/A definir" />

      <div class="flex gap-1 text-white">
        <Navigation to="/perfil" :img="imgTeste" />
        <div class="flex flex-col">
          <span class="font-bold text-xl">SHADOW</span>
          <span>#8378</span>
        </div>
      </div>
    </section>
  </div>
</template>
