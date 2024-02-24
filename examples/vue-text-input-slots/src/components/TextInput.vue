<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="text-input-container">
    <FontAwesomeIcon :icon="faSearch" class="icon" />
    <input type="search" name="search" class="field" placeholder="Search..." />
    <input type="submit" value="Search" class="button" />
  </div>
</template>
