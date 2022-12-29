<template>
    <div class="dark:bg-dark-secondary bg-light-primary dark:text-light-primary px-4 pb-6 pt-24 lg:ml-24 lg:pt-16 md:pl-8 shadow-2xl overflow-y-auto min-h-screen"> 
        <div class="dark:bg-dark-secondary dark:text-light-primary text-dark-secondary bg-light-primary h-full w-full">
                <h1 class="capitalize font-medium">new invoice</h1>

            <p class="capitalize text-primary-color-700 font-bold my-3">bill from</p>

            <form action="#" class="capitalize text-primary-color-100 text-xs mt-2 mb-5 w-full">

                <div class="flex flex-col">
                    <label for="street-address">street address</label>
                    <input type="text" name="street-address" id="">
                </div>

                <div class="flex justify-between w-full gap-3">
                    <div class="flex flex-col w-full">
                        <label for="city">city</label>
                        <input type="text" name="city" id="" >
                    </div>

                    <div class="flex flex-col w-full">
                        <label for="post-code">post code</label>
                        <input type="text" name="post-code" id="">
                    </div>
                </div>

                <div class="flex flex-col w-full ">
                    <label for="country">country</label>
                    <input type="text" name="country" id="">
                </div>
    
                <p class="capitalize text-primary-color-700 font-bold my-3 text-base">bill to</p>

                <div class="flex flex-col">
                    <label for="client-name">client's name</label>
                    <input type="text" name="client-name" id="">
                </div>

                <div class="flex flex-col">
                    <label for="country">client's email</label>
                    <input type="email" name="country" id="">
                </div>

                <div class="flex flex-col">
                    <label for="client-address">street address</label>
                    <input type="text" name="client-address" id="">
                </div>

        
                    
                <div class="flex justify-between w-full gap-3">
                    <div class="flex flex-col w-full">
                        <label for="client-city">city</label>
                        <input type="text" name="cclient-ity" id="" >
                    </div>

                    <div class="flex flex-col w-full">
                        <label for="client-post-code">post code</label>
                        <input type="text" name="client-post-code" id="">
                    </div>
                </div>
                <div class="flex flex-col w-full ">
                    <label for="client-country">country</label>
                    <input type="text" name="client-country" id="">
                </div>
    
                <div class="flex justify-between w-full gap-3">
                    <div class="flex flex-col w-full">
                        <label for="invoice-date">invoice date</label>
                        <input type="date" name="invoice-date" id="">
                    </div>
                    
                    <div class="flex flex-col w-full">
                        <label for="payments-terms">payments terms</label>
                        <select name="payments-terms " id="">
                            <option selected disabled value="">net 30 days</option>
                            <option value="">option2</option>
                            <option value="">option3</option>
                        </select>
                    </div>
                </div>
                
                <div class="flex flex-col w-full ">
                    <label for="invoice-date">project description</label>
                    <input type="text" name="invoice-date" id="">
                </div>
            </form>

            <div class="flex justify-between pb-10">
                <button class="hover:cursor-pointer hover:bg-blend-darken rounded-3xl bg-light-secondary  dark:bg-light-secondary px-4 py-2 text-xs text-primary-color-100 font-bold capitalize" @click="showAddForm">discard</button>
                <div>
                    <button class="mx-2 hover:cursor-pointer hover:bg-blend-darken rounded-3xl bg-dark-tertiary px-4 py-2 text-xs text-light-primary font-bold capitalize">save as draft</button>
                    <button class="hover:cursor-pointer hover:bg-blend-darken rounded-3xl bg-primary-color-700 px-4 py-2 text-xs text-light-primary font-bold capitalize" >save & send</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'TheAddNewForm',
    emits:['close-newForm'],
    data(){
        return{

        }
    },

    methods:{

        showAddForm(){
            this.$emit('close-newForm',{
                addClass : '-left-[110%]'
            })
        }
    }

}
</script>

<style scoped>

input{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid red;
    width: 100%;
    margin-bottom: 10px;
}

select{
    padding: 12px;
    border-radius: 5px;
    border: 1px solid red;
}



label{
    margin: 5px 0;
}

</style>