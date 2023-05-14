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
                // use a random one coming from your backend!
                let nonce_fixed = 'h34234823j4iuh23r432ihjgyfudhr3843jnuidyhr98734uh';

                let nonce = this.$Web3.toHash(nonce_fixed);
                console.log("NONCE: ",nonce);
                this.$Web3.getSigner().signMessage(nonce).then(result=>
                    console.log("signMessage: ",result))

            });
        }
    }
</script>
