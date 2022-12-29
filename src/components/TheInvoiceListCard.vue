<template>

    <article class="invoice-card">
        <h3 class="invoice-id text-left w-full ">#{{id}} </h3>
        <div class="payment-due w-full "> {{ dueDate }} </div>
        <div class="client sm:w-full "> {{ client }}</div>
        <h2 class="price w-full ">£ {{ price }}</h2>
        <div class="iStatus status w-full max-w-[104px] sm:mr-4" :class="status"> {{ status }} </div>
        <svg class=" hidden sm:inline-block sm:w-[100px] hover:cursor-pointer" @click="showFullInvoice(id)" width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path 
            class=""
            d="M1 1l4 4-4 4" 
            stroke="#7C5DFA" 
            stroke-width="2" 
            fill="none" 
            fill-rule="evenodd"/>
        </svg>
    </article>

</template>



<script>

export default {

    name:'TheInvoice',

    props:{
        id:{
            type: String
        },
        dueDate:{
            type: String
        },
        client:{
            type: String
        },
        price:{
            type: Number
        },
        status:{
            type: String
        },
    },

    data(){
        return{

        }
    },
    methods:{
        showFullInvoice(id){
            console.log('clicked',id)
        }
    }
}
</script>

<style scoped>
@import '@/styles/TheInvoiceListCard.css';



</style>