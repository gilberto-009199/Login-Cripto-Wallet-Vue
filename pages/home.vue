<template>
  <div>
    
  </div>
</template>
<script>
    export default {
        asyncData() {
            return { }
        },
        beforeMount() {
            
            this.$nuxt.$on('my-event', (dados) => { 
                console.log("Hello!",dados)
            });
        }
    }
</script>