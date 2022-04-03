<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="load" v-if="migrations.length === 0">Load data from server</button>

    <div class="server-response" v-if="migrations.length > 0">
      <h2>Data from server:</h2>
      <ul>
        <li v-for="item in migrations" :key="item.id">{{ item.migration }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_ENDPOINT
axios.defaults.withCredentials = true

import {ref} from "vue";

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  setup() {

    const migrations = ref([])

    function onSuccess(response) {
      migrations.value = response.data;
    }

    function load() {
      axios.get('/api/migration/list')
        .then(onSuccess)
        .catch((error) => { alert(`Error ${error.message}`) })
    }

    return {
      load,
      migrations
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
ul {
  text-align: start;
}
button {
  font-size: 1.1rem;
}
.server-response {
  display: inline-block;
}
.server-response h2 {
  text-align: start;
  padding-inline-start: 40px;
}
</style>
