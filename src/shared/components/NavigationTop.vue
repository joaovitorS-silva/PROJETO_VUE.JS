<script setup lang="js">
defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: false,
  },
});
</script>

<template>
  <div>
    <RouterLink
      :to="to"
      class="flex bg-buttonPrincipal rounded-md p-3 hover:bg-[#D9FF33] shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
      ><div class="flex gap-2">
        <component v-if="icon" :is="icon" />

        {{ label }}
      </div>
    </RouterLink>

  </div>
</template>
