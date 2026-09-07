<script setup lang="js">
defineProps({
  icon: {
    type: Object,
    required: true,
  },

  to: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div>
    <RouterLink
      class="inline-flex items-center justify-center rounded-md p-3 text-white transition duration-300 ease-in-out hover:bg-buttonPrincipal hover:text-black hover:shadow-[0_0_3px_#CCFF00,0_0_15px_#CCFF0080]"
      :to="to"
    >
      <component v-if="icon" :is="icon" />
    </RouterLink>
  </div>
</template>
