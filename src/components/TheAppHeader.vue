<template>
    <section class="mt-4 flex w-full justify-between items-center ">

        <div class="dark:text-light-primary text-dark-secondary  flex-grow">
            <h1 class="text-2xl lg:text-4xl">Invoices</h1>
            <small>
                <span>{{ getInvoicesCount }}</span>
            </small>
        </div>

        <div class="mr-5 lg:mr-10 ">
            <div @click="hidden" id="dropdown-filter"  class="flex justify-around items-center gap-3 ">
                <span class="dark:text-light-primary text-dark-secondary">Filter <span class="hidden lg:inline">by status</span> </span>
                <svg :class="turn" class="hover:cursor-pointer" id="arrow" width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M1 1l4.228 4.228L9.456 1" 
                    stroke="#7C5DFA" stroke-width="2" 
                    fill="none" fill-rule="evenodd"/>
                </svg>
            </div>
            <ul id="dropdown-list" v-if="listVisible" class="absolute bg-light-primary dark:bg-dark-secondary p-2 w-[130px] mt-4 rounded-md shadow-2xl">
                <li>
                    <label for="" class=" dark:text-light-primary text-dark-secondary">
                        <input class="" type="checkbox" />draft
                    </label>
                </li>
                <li>
                    <label for="" class=" dark:text-light-primary text-dark-secondary">
                        <input class="" type="checkbox" />pending
                    </label>
                </li>
                <li>
                    <label for="" class=" dark:text-light-primary text-dark-secondary">
                        <input class="" type="checkbox" />pain
                    </label>
                 </li>
            </ul>
        </div>

        <button id="addNewInvoice"  @click="addNewInvoice" class="">
            <svg  class="left-4 lg:left-[17px] absolute z-10" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path class="" d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" 
                    fill="rgb(124 93 250)" 
                    fill-rule="nonzero"
                />
            </svg>
        </button>

    </section>

</template>

<script>
export default {
    name:'TheAppHeader',
    emits: ['my-event'],

    data(){
        return{
            listVisible:false,
            turn:''
        }
    },

    computed:{
        getInvoicesCount(){
            const invoices =  this.$store.state.data.invoices

            if(invoices.length == 0){
                return 'No invoices'
            }else{
                return invoices.length + ' invoices'
            }
        }
    },
    
    methods:{
        addNewInvoice(){
            console.log('clicked')
            this.$emit('my-event', { addClasses: 'left-0'})
        },
        
        hidden(){
            if(!this.listVisible){
                this.listVisible=true
                this.turn='rotate-180 duration-300'
            } else{
                this.listVisible=false
                this.turn='duration-300'
            }
        },
    }
}



</script>

<style scoped>

    @import '@/styles/btn-addNewInvoice.css';
    @import '@/styles/checkbox.css';


</style>