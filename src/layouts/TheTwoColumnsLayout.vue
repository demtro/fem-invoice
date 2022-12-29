<template>

  <div :class="containerClasses" class="container-fluid">

    <div :class="rowClasses" class="row">

        <div :class="leftColumnClasses">
            <slot name="leftCol">
                <h1> Linke Spalte </h1>
            </slot>
        </div>
        <div :class="rightColumnClasses">
            <slot name="rightCol">
                <h1>Rechte Spalte</h1>
            </slot>
        </div>

    </div>

  </div>

</template>

<script>
export default {
    name:'TheTwoColumnsComponent',

    props:{

        leftColumnsClass:{
            type:String,
            default:'col-md-8'
        },

        rightColumnsClass:{
            type:String,
            default: 'col-md-4'
        },

        fullSize: {
            type:Boolean,
            default:false
        }
    },

    computed:{

        leftColumnClasses(){
            return [this.leftColumnsClass,this.fullSize ? 'h-100': '']
        },

        rightColumnClasses(){
            return [this.rightColumnsClass,this.fullSize ? 'h-100': '']
        },
        
        rowClasses(){
            return [this.fullSize ? 'h-100': '']
        },

        containerClasses(){
            return [this.fullSize ? 'vh-100' : '']
        }

    }

}
</script>

<style>

</style>