<script setup lang="ts"></script>

<template>
  <div class="text-input-container">
    <slot name="prepend"></slot>
    <input type="text" name="search" class="field"/>
    <slot name="append"></slot>
  </div>
</template>
