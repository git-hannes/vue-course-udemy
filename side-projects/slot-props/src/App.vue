<template>
  <div id="app">
    <hello-world #default="v">
      <p>Hello {{ v.user.name }}</p>
      <p>My favorite things are:</p>
      <ul>
        <li v-for="favorite in v.favorites" :key="favorite">
          {{ favorite }}
        </li>
      </ul>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
