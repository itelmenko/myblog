<template>
  <div class="nested-components">
    <h1>Nested With CSS</h1>
    <p>Nested components with slots and CSS customization.</p>
    <ChildBlock><strong>Passing content to ChildBlock</strong></ChildBlock>
    <ParentBlock><strong>Passing content to ParentBlock</strong></ParentBlock>
    <GrandBlock><strong>Passing content to GrandBlock</strong></GrandBlock>
  </div>
</template>

<script setup>
import ParentBlock from "@/components/nested-with-styles/ParentBlock.vue";
import ChildBlock from "@/components/nested-with-styles/ChildBlock.vue";
import GrandBlock from "@/components/nested-with-styles/GrandBlock.vue";
</script>
