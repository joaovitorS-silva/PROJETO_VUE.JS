<script setup lang="js">
import { Wallet, Gamepad2 } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter()

function IrParaPerfil(){
  router.push("/perfil")

}
</script>

<template>
  <div class="mt-0 gap-10 py-5 flex bg-fundo-principal w-full text-white">
    <img
      class="w-10"
      src="https://imgs.search.brave.com/VJNH2i52ous-w8yWHFx-YUp0wBLrJvnftTw3CxAlDQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9hby1jb250/cm9sZS1pY29uLXN2/Zy1kb3dubG9hZC1w/bmctMTIyODc2My5w/bmc_Zj13ZWJwJnc9/MTI4"
      alt="dasdasdas"
    />
    <input type="text" placeholder="SEARCH" class="bg-fundo-secundario rounded-2xl p-2" />
    <button
      class="ml-auto flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      <Wallet />
      5,49 USD
    </button>
    <button
      class="flex bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      pessoas
    </button>
    <button
      class="flex bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      msg
    </button>
    <button
      class="flex bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      notificação
    </button>
    <button @click="IrParaPerfil"
      class="flex bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080] cursor-pointer">
      perfil
    </button>
  </div>
</template>
