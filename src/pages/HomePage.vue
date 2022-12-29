<template>
  <TheAppLayout >
    <template #default  >

      <TheAppHeader @my-event="handleEvent"  />
      <TheInvoicesCardsList v-if="isEmptyList" />
      <theEmptyInvoices v-else  />
      <TheAddNewForm :class="showNew" @close-newForm="showNewForm" class="entry h-screen absolute top-0 w-screen sm:w-1/2 lg:w-1/3 z-10 shadow-2xl" />

 


    </template>
  </TheAppLayout>
</template>

<script>
import TheInvoicesCardsList from '@/components/TheInvoicesCardsList'
import TheAppLayout from '@/layouts/TheAppLayout';
import TheAppHeader from '@/components/TheAppHeader';
import theEmptyInvoices from '@/components/TheEmptyInvoices';
import TheAddNewForm from '@/components/TheAddNewForm'




export default {


  
    name:'HomePage',
    components:{TheAppLayout, TheAppHeader, TheInvoicesCardsList, theEmptyInvoices, TheAddNewForm},

    data(){
   
      return{

        showNew:'-left-[100%]'
        

      }
    },

    computed:{

      isEmptyList(){
        const invoices = this.$store.state.data.invoices
        return invoices.length > 0

      }
    },

    methods:{
      handleEvent(eventData) {
        this.showNew=eventData.addClasses// Outputs: "Hello, World!"
    },

    showNewForm(e){
      this.showNew=e.addClass
    },

    generateRandomString() {
      const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let randomString = '';

      for (let i = 0; i < 5; i++) {
        randomString += chars[Math.floor(Math.random() * chars.length)];
      }
      return randomString;
    } 
  }
}

</script>

<style>

.entry{
  transition: all 450ms ease-in-out;
}



</style>