<template>
  <CustomTextInput>
    <template #prepend>
      <FontAwesomeIcon :icon="faSearch" class="icon" />
    </template>
    <template #append>
      <input type="submit" value="Search" class="button" />
    </template>
  </CustomTextInput>
</template>

<script setup>
import CustomTextInput from "@/components/nested-with-named-slots/CustomTextInput.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
</script>
