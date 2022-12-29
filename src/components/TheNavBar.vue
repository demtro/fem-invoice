<template>
    <div class="z-30">
        <nav class="menu z-30 sticky">
            <div class="logo">
                <div class="bg-primary-color-700 h-full rounded-tr-3xl rounded-br-3xl"></div>
                <svg class="absolute abs-centered z-10" xmlns="http://www.w3.org/2000/svg" width="28" height="26">
                    <path 
                        fill="#FFF" 
                        fill-rule="evenodd" 
                        d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
                    />
                </svg>
                <div class="bg-primary-color-300 absolute bottom-0 h-1/2 w-full rounded-tl-3xl rounded-br-3xl"></div>
            </div>
            <div class="nav-controls ">
                <div class="" @click="changeMode">
                    <i v-if="darkMode" class="fas fa-sun nav-icon"></i>
                    <i v-else class="fas fa-moon nav-icon"></i>
                </div>
                <div class="">
                    <button @click="signOut">
                        <i class="fas fa-sign-out-alt nav-icon"></i>
                    </button>
                </div>
            </div>
            <div class="avatar">
                <img class="" src="../assets/image-avatar.jpg" alt="">
            </div>
        </nav>
    </div>
</template>

<script>
export default {

    name:'TheNavBar',

    data(){
        return{
            darkMode:true
        }
    },

    methods:{

        async signOut(){
            try {
                await this.$store.dispatch('signOut')
                this.$router.push('/')
            } catch (error) {
                console.log(error)
            }
        },

        changeMode(){
            const mode = document.documentElement.classList[0]
            if(mode == 'dark'){
                document.documentElement.classList.remove('dark')
            }else{
                document.documentElement.classList.add('dark')
            }

            this.darkMode = !this.darkMode
        }
    }

}

</script>

<style scoped>
@import '@/styles/navBar.css'



</style>