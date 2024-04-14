<template>
  <div class="nested-with-named-slots">
    <h1>Nested With Named Slots</h1>
    <p>Level 1. TextInput. Base component</p>
    <TextInput id="text-input-1"></TextInput>
    <p>Level 2. CustomTextInput without label</p>
    <CustomTextInput id="custom-input-1"></CustomTextInput>
    <p>Level 2. CustomTextInput with label as prop</p>
    <CustomTextInput id="custom-input-2" label="Label as prop"></CustomTextInput>
    <p>Level 2. CustomTextInput with label as slot</p>
    <CustomTextInput id="custom-input-3">
      <template #label><i>Label as Slot</i></template>
    </CustomTextInput>
    <p>Level 3. SearchInput without label</p>
    <SearchInput id="search-input-1"></SearchInput>
    <p>Level 3. SearchInput with label</p>
    <SearchInput id="search-input-2" label="Text of label property"></SearchInput>
  </div>
</template>
<script setup>
import SearchInput from "@/components/nested-with-named-slots/SearchInput.vue";
import TextInput from "@/components/nested-with-named-slots/TextInput.vue";
import CustomTextInput from "@/components/nested-with-named-slots/CustomTextInput.vue";
</script>
