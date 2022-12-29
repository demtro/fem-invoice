<template>

    <div class="p-4 rounded-lg shadow-lg bg-dark-primary w-full max-w-md">
        <img class="w-10 mb-3 " src="../../assets/DTLogo.png" alt="logo">
        <Form 
            class="text-secondary-color-700" 
            @submit="submitData" 
            :validation-schema="signUPSchema" 
            v-slot="{errors}"
        >
            <small v-if="errors.email">{{errors.email}}</small>

            <div class="mb-4">
                <Field 
                    as="input"
                    type="email" 
                    class="form-control" 
                    name="email"
                    placeholder="Enter email"
                />
            </div>
            
            <small v-if="errors.password">{{errors.password}}</small>
            <div class="mb-4">
                <Field
                    as="input"
                    type="password" 
                    class="form-control" 
                    name="password"
                    placeholder="Password" 
                />
            </div>

            <small v-if="errors.confirmPassword">{{errors.confirmPassword}}</small>
            <div class="mb-4">
                <Field
                    as="input"
                    type="password" 
                    class="form-control" 
                    name="confirmPassword"
                    placeholder="confirm password" 
                />
            </div>

            
            <small v-if="fb_error">{{ err_message }}</small>
            
            <button class="btn">
                <span v-if="!is_loading" class="">Sign Up</span>
                <div v-else class="load-spin"></div>
            </button>

            <div class="flex items-center justify-around mt-4">
                <span class="text-light-primary">Already have an account? </span>
                <a href="#" class="link" @click="changeComponent('SignIn')"> Login </a>
            </div>

        </Form>
    </div>
</template>

<script>

import { Form,Field } from 'vee-validate';
import { signUPSchema } from '@/javascripts/yupSchema.js'

export default {

    name:'SignUp',
    components:{Form, Field},
    emits:{

        'change-component': (payload) => {
            if(payload.componentName !== 'SignIn'){
                return false
            }
            return true
        }
},

    data(){

        return{
            signUPSchema,
            fb_error:false,
            err_message:'',
            is_loading:false
        }
    },

    computed:{

    },

    methods:{

        submitData(values){

            this.is_loading=true
            
            this.$store.dispatch('signup',{
                email: values.email,
                password: values.password
            }).then(
                () =>{
                    this.is_loading=false
                    this.changeComponent('SignIn')
                }
            )
            .catch(
                    (error) => {
                    this.is_loading=false
                    this.fb_error=true
                    this.err_message = error.message
                }
            )
        },

        changeComponent(componentName){
            this.$emit('change-component',{ componentName })
        }
    }
}
</script>

<style>

</style>