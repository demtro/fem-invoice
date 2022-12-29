<template>
  <!-- navbar  -->
  <div class="wrapper">
        <TheNavBar></TheNavBar>
        <main class="w-10/12 lg:max-w-[720px] mx-auto mt-5 pb-5">
            <slot> 
                <h1>the app layout</h1>
            </slot>
        </main>
    </div>

</template>

<script>

import TheNavBar from '@/components/TheNavBar';


export default {
    name:'TheAppLayout',
    components:{TheNavBar }

}
</script>

<style>

</style>