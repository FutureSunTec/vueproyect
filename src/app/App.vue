<style scoped>



</style>

<template>

<div>

    <Navbar></Navbar>
    <router-view></router-view>
</div>

</template>

<script>
import Navbar from './Component/Navbar/Navbar.vue'
    export default {
    components: {
        Navbar
    }
}
</script>
