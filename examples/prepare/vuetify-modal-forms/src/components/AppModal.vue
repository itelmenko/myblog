<template>
  <component :is="component">
    <slot></slot>
  </component>
</template>

<script setup>

import DlgModal from "@/components/modals/DlgModal.vue";
import DrawerModal from "@/components/modals/DrawerModal.vue";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay()
const component = computed( () => mobile.value ? DrawerModal : DlgModal);

defineEmits(['close'])
</script>
