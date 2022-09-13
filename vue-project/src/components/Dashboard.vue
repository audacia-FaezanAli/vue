<script lang="ts">
    import { User } from "@/models/user";
    import router from "@/router";
    import { defineComponent } from "vue";
    import SignUp from './SignUp.vue';
    import HelloWorld from './HelloWorld.vue'

    export default defineComponent({
    components: {
        SignUp,
        HelloWorld,
    },
    Data() {
        return{
        }
    },
    })
</script>

<template>
    <header>
        <div class="wrapper">
            <HelloWorld :msg="Dashboard"/>
        </div>

    </header>


</template>

<style>


</style>