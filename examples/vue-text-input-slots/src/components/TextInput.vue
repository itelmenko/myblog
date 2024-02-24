<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="text-input-container">
    <div class="text-input-prepend-icon"><FontAwesomeIcon :icon="faSearch" /></div>
    <input class="text-input-field" type="search" name="search" placeholder="Search..." />
    <input type="submit" value="Search" class="text-input-append-button" />
  </div>
</template>
