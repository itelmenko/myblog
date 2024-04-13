<template>
  <div class="nested-components">
    <h1>Nested With Props</h1>
    <p>
      Nested components with slots and customization through props.
    </p>
    <ChildBlock><strong>Passing content to ChildBlock</strong></ChildBlock>
    <ParentBlock><strong>Passing content to ParentBlock</strong></ParentBlock>
    <GrandBlock><strong>Passing content to GrandBlock</strong></GrandBlock>
  </div>
</template>

<script setup>
import ParentBlock from "@/components/nested-with-props/ParentBlock.vue";
import ChildBlock from "@/components/nested-with-props/ChildBlock.vue";
import GrandBlock from "@/components/nested-with-props/GrandBlock.vue";
</script>


