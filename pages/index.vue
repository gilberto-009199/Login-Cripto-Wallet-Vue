<template>
  
</template>
<style>

</style>
<script>
    export default {
        asyncData() {
            return { }
        },
        beforeMount() {
            this.$nuxt.$on('acconts-change', (dados) => { 
                console.log("Hello!",dados)
            });
        }
    }
</script>
