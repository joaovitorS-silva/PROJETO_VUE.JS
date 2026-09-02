<script setup lang="js">
import { Wallet, Gamepad2 } from "lucide-vue-next";
</script>

<template>
  <div class="mt-0 gap-10 py-5 flex bg-cards-destacados text-white">
    <input
      type="text"
      class="bg-fundo-secundario rounded-xl"
      placeholder="Search"
    />
    <button
      class="ml-auto flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      <Wallet />
      5,49 USD
    </button>
    <button
      class="flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      pessoas
    </button>
    <button
      class="flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
       msg
    </button>
    <button
      class="flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      notificação
    </button>
    <button
      class="flex gap-2 bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
    >
      perfil
    </button>
  </div>
</template>
