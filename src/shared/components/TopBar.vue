<script setup lang="js">
import { Search, Wallet, Gamepad2 } from "lucide-vue-next";

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
        placeholder="SEARCH"
        class="bg-fundo-secundario rounded-2xl p-3 pl-9"
      />
    </div>
    <section class="flex ml-auto gap-12">
      <Navigation :icon="Wallet" label="5,49USD" to="definir rota" />
      <Navigation label="pessoas" to="a denifir" />
      <Navigation label="msg" to="/a definmir" />
      <Navigation label="notificação" to="/A definir" />
        <Navigation label="Perfil" to="/perfil" />
      
    </section>
  </div>
</template>
