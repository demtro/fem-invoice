<template>

    <TheTwoColumnsLayout
        :leftColumnsClass="'col-md-8 bg-text-light-primary dark:bg-dark-primary text-primary-color-700'"
        :rightColumnsClass="'col-md-4 '"
        :fullSize="true"
    >

        <template #leftCol>
            <div class="my-5 offset-4 col-4">
                <img class="w-50 mx-auto" src="@/assets/demtrodev-logo.png" alt="logo">
            </div>
            <div class="mt-5">
                <div class="display-1 my-5 text-center">
                     <span class="mytext">Invoice-App</span> 
                </div>
            </div>
        </template>
        
        <template #rightCol>
            <div class="flex justify-center items-center h-100">
                <transition
                    enter-active-class="animate__animated animate__bounceInRight"
                    leave-active-class="animate__animated animate__bounceOutRight"
                    mode="out-in"
                >

                    <component  
                        :is="componentName"
                        @change-component="changeComponent"
                    >
                    </component>
                    
                </transition>
            </div>
        </template>

    </TheTwoColumnsLayout>

</template>

<script>

import TheTwoColumnsLayout from '@/layouts/TheTwoColumnsLayout.vue';
import SignUp from '@/components/auth/SignUp.vue';
import SignIn from '@/components/auth/SignIn.vue';

export default {

    name:'HomePage',
    components:{TheTwoColumnsLayout, SignUp,SignIn},

    data(){
        return{
            componentName: 'SignIn'
        }
    },

    methods:{
        changeComponent(payload){
            this.componentName = payload.componentName
        }
    }
}

</script>

<style>

</style>