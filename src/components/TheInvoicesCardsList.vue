<template>
    <TheInvoiceListCard
        v-for="invoice in invoices" 
        :key="invoice.id" 
        :id="invoice.id"
        :dueDate="invoice.paymentDue"
        :client="invoice.clientName"
        :price="invoice.total"
        :status="invoice.status"
      />
</template>

<script>
import TheInvoiceListCard from '@/components/TheInvoiceListCard';


export default {
    name:'TheInvoicesCardsList',
    components:{ TheInvoiceListCard },
    data(){
        return{
            invoices:this.$store.state.data.invoices
        }
    },
}
</script>

<style>

</style>