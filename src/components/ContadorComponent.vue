<template>
    <div>
        <h3 class="contador">{{contador}}</h3> 
        <div>
            <button class="btn white botonDisminuir" v-on:click="botonDisminuir">➖</button>
            <button class="btn white botonIncrementar" v-on:click="botonIncrementar">➕</button>
        </div>
    </div>
  </template>
  
  <script>
//   import { mapState } from "vuex";
  
  export default {
    name: 'ContadorComponent',
    methods: {
        botonIncrementar () {
            this.$store.commit('incrementar', 1)
        },
        botonDisminuir () {
            this.$store.commit('disminuir', 1)
        }
    },
    computed: {
    // ...mapState(['contador']),
        contador() {
            return this.$store.state.contador;
        }
    }
  }
  </script>
  
  <style>
    .btn {
        border: 1px solid blueviolet;
        border-radius: 1rem;
        margin: 5px;
        width: 100px;
        padding: 5px;
        font-size: 1rem;
    }
    
    h3{
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        font-size: 4rem;
        color: blueviolet;
    }
      
  </style>