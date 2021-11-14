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
                console.log(this.$Web3.ethers.utils);
                console.log(this.$Web3.ethers.utils.arrayify)
                
                let nonce = this.$Web3.toHash('hello world');
                console.log("NONCE: ",nonce);
                this.$Web3.getSigner().signMessage(nonce).then(result=>
                    console.log("signMessage: ",result))

            });
        }
    }
</script>
