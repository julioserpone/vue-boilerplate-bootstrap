<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="1">
          <div class="clearfix">
            <b-img width="80" height="80" left src="./assets/logo.png" alt="Vue Logo"></b-img>
          </div>
        </b-col>
        <b-col cols="11">
          <h1>Vue js Boilerplate with Bootstrap</h1>
          <p>
            Small boilerplate that allows you to have an application in VUE with API consumption. Comes integrated with Bootstrap and Axios
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
  }
</script>
