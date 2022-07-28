<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>站内链接</h2>
    <ul>
      <li>
        <router-link to="/data">
          <span>智慧社区数字管理平台</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data">
          <span>中药文化数字传播平台</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'VUE学习笔记'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
