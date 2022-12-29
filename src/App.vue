<template>

<router-view></router-view>

</template>

<script>

export default {

    name: 'App',
    // hier wird falls der tokenID nicht abgelaufen ist, die autoSignIn aufgerufen!
    created(){
        this.$store.dispatch('autoSignIn')
    }
}

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&family=Oxygen:wght@300;700&family=Ubuntu:ital,wght@1,300&display=swap'); 
    @import '~@fortawesome/fontawesome-free/css/all.min.css';
    @import '~animate.css/animate.min.css';
  

    :root {
      --font-family: 'League Spartan', sans-serif;
      --light-primary: #fff;
    }



    

  #app {
    font-family: var(--font-family);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


</style>
