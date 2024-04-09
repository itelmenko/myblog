<template>
  <div class="nested-components">
    <h1>Nested components with slots</h1>
    <ChildBlock><strong>Passing content to ChildBlock</strong></ChildBlock>
    <ParentBlock><strong>Passing content to ParentBlock</strong></ParentBlock>
    <GrandBlock><strong>Passing content to GrandBlock</strong></GrandBlock>
  </div>
</template>

<script setup>
import ParentBlock from "@/components/nested-components-with-styles/ParentBlock.vue";
import ChildBlock from "@/components/nested-components-with-styles/ChildBlock.vue";
import GrandBlock from "@/components/nested-components-with-styles/GrandBlock.vue";
</script>


