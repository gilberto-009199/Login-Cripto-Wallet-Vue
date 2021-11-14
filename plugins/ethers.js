import Vue from 'vue'

import { ethers } from 'ethers'

let MyPlugin = {};

MyPlugin.install = function (Vue, options) {
    var provider = null;
    var signer = null;
    var blockchain = {};
    blockchain.ethers = ethers;
    blockchain.getProvider = function(){
        return provider;
    };
    blockchain.setProvider = function(provi){
        provider = new ethers.providers.Web3Provider(provi);
        return ethers;
    };
    blockchain.getSigner = function(){
        
        if( signer == null )signer = provider.getSigner();/*.then(sign =>{
            signer = sign;
            return sign;
        });*/

        return signer;
    };

    blockchain.toHash = function(texto){
        if((/(0x)/).test(texto)){
            return ethers.utils.keccak256(texto);
        }else return ethers.utils.id(texto)
    }

    //Vue.prototype.$Rateeee = function (methodOptions) {}
    Vue.prototype.$Web3 = blockchain;
}

Vue.use(MyPlugin)
