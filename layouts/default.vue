<template>
  <div id="particles-js">
    <main>
        <button @click="contractConnect">Connet Wallet</button>
      <Nuxt />
    </main>
  </div>
</template>
<script>
    export default {
        Data() {
            return { }
        },
        methods:{
            async contractConnect() {
                console.log("Tentando")
                if (this.isEthereumSupported()) {
                    // Ready to use Web3.js!
                    // Example Usage :
                    // let data = await this.getProduct(100);
                    // console.log(data);
                }
            },
            async isEthereumSupported() {
                if (window.ethereum) {
                    window.web3 = new this.$Web3(window.ethereum);
                    try {
                        // Chamar autorização da Carteira
                        let dados = await window.ethereum.enable();
                        console.log(dados);
                        return true;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }

                } else { // Nao suporta 
                    console.log("Tente usar o MetaMask!");
                      window.open('https://metamask.io/', '_blank');
                }
            }
        },
        mounted() {
            // Jquery Plugins e Particle Js
            $('nav div[role="itemmenu"]').mouseenter(function(){   $(this).find('a').shuffleLetters();  });
            $("#particles-js").length && particlesJS("particles-js", { particles: {number: {value: 28},  color: {                                value: ["#0182cc", "#edc711", "#0182cc"]                            },                            shape: {                                type: "circle"                            },                            opacity: {                                value: 1,                                random: !1,                                anim: {                                    enable: !1                                }                            },                            size: {                                value: 3,                                random: !0,                                anim: {                                    enable: !1                                }                            },                            line_linked: {                                enable: !1                            },                            move: {                                enable: !0,                                speed: 2,                                direction: "none",                                random: !0,                                straight: !1,                                out_mode: "out"                            }                        },                        interactivity: {                            detect_on: "canvas",                            events: {                                onhover: {                                    enable: !1                                },                                onclick: {                                    enable: !1                                },                                resize: !0                            }                        },                        retina_detect: !0                    });        
        }
    }
</script>