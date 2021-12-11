<template>
  <div class="level1">
    <h3>Child Level 1</h3>
    <child-level2></child-level2>
  </div>
</template>

<script>
import ChildLevel2 from "./ChildLevel2";

export default {
  components: {ChildLevel2},
}
</script>

<style lang="css">
.level1 {
  border: 1px solid firebrick;
  padding: 7px;
  border-radius: 6px;
}
</style>

