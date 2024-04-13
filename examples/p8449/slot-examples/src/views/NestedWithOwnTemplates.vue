<template>
  <div class="nested-with-own-templates">
    <h1>Nested With Own Templates</h1>
    <p>
      Nested components with slots. Each level has own template.
    </p>
    <ChildBlock><strong>Passing content to ChildBlock</strong></ChildBlock>
    <ParentBlock backgroundColorStyle="gray" textColorStyle="white"><strong>Passing content to ParentBlock</strong></ParentBlock>
    <GrandBlock><strong>Passing content to GrandBlock</strong></GrandBlock>
  </div>
</template>

<script setup>
import ChildBlock from "@/components/nested-with-own-templates/ChildBlock.vue";
import ParentBlock from "@/components/nested-with-own-templates/ParentBlock.vue";
import GrandBlock from "@/components/nested-with-own-templates/GrandBlock.vue";
</script>
