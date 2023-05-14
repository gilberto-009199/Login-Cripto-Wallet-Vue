<template>
  <div id="particles-js">
    <nav>
        <button id="btnConectarWallet" class="btn" @click="contractConnect">Connect Wallet</button>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<style>
    #btnConectarWallet{
        float: right;
    }
</style>
<script>
    export default {
        data() {
            return {
                acconts:null
             }
        },
        methods:{
            async contractConnect() {
                
                if ( await this.isEthereumSupported() ) {

                    this.$nuxt.$emit('acconts-change', this.acconts);

                }
            },
            /*
             *  Checks if the browser supports Web3
             *  returning true and false, and filling in the wallets
             */
            async isEthereumSupported() {
                // MetaMask
                if (window.ethereum) {
                    this.$Web3.setProvider(window.ethereum);
                // Dapp para browsers Legados...
                } else if (window.web3) {
                    this.$Web3.setProvider(web3.currentProvider);
                // Does not support
                } else {
                    alert("Metamask not installed or not detected")
                    window.open('https://metamask.io/', '_blank');
                    return false;
                }

                try {

                    this.acconts = await this.$Web3.getProvider().send("eth_requestAccounts")
                    
                    // read subscriber wallet address
                    //this.acconts = await this.$Web3.getSigner().getAddress();
                    
                    return true;

                } catch(error) {
                    console.log(error);
                    return false;
                }
            }
        },
        mounted() {
            // Jquery Plugins e Particle Js
            //$('nav div[role="itemmenu"]').mouseenter(function(){   $(this).find('a').shuffleLetters();  });
            
            // Hocks Web3
            //      Alter network
            // window.ethereum.on('networkChanged', function(networkId){
            //   console.log('networkChanged',networkId);
            // });
        },
        beforeMount(){
            setTimeout(()=> {$("#particles-js").length && particlesJS("particles-js", { particles: {number: {value: 28},  color: {                                value: ["#0182cc", "#edc711", "#0182cc"]                            },                            shape: {                                type: "circle"                            },                            opacity: {                                value: 1,                                random: !1,                                anim: {                                    enable: !1                                }                            },                            size: {                                value: 3,                                random: !0,                                anim: {                                    enable: !1                                }                            },                            line_linked: {                                enable: !1                            },                            move: {                                enable: !0,                                speed: 2,                                direction: "none",                                random: !0,                                straight: !1,                                out_mode: "out"                            }                        },                        interactivity: {                            detect_on: "canvas",                            events: {                                onhover: {                                    enable: !1                                },                                onclick: {                                    enable: !1                                },                                resize: !0                            }                        },                        retina_detect: !0                    });        
            },300)
        }
    }
</script>