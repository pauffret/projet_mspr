<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">
        <router-link to="/">
          <b-button variant="primary">RECYCL</b-button>
        </router-link>
      </b-navbar-brand>
    </b-navbar>
    <router-view/>
  </div>
</template>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
<style>
  .navbar-expand {
    justify-content: center !important;
  }
  .buttonAccueil {
    width: 8% !important;
    box-shadow: 3px 2px #9cb5f8f7 !important;
  }
  table{
    box-shadow: 3px -2px #0055ff4a;
  }

</style>
