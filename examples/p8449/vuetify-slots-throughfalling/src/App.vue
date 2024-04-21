<template>
  <v-layout class="rounded rounded-md">
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-card :elevation="5" class="ma-5" width="100%">
        <posts-data-table></posts-data-table>
      </v-card>
    </v-main>
  </v-layout>
</template>
<script setup>
import PostsDataTable from "@/components/PostsDataTable.vue";
</script>
