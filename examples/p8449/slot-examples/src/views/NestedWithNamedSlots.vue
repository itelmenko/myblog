<template>
  <div class="nested-with-named-slots">
    <h1>Nested With Named Slots</h1>
    <p>Nested components with named slots.</p>
    <SearchInput></SearchInput>
    <SearchInput label="Text of label property"></SearchInput>
<!--    <SearchInput><template #label><i>Label from slot</i></template></SearchInput>-->
  </div>
</template>
<script setup>
import SearchInput from "@/components/nested-with-named-slots/SearchInput.vue";
</script>
