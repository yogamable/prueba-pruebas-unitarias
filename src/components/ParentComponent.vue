<template>
    <div class="parentComponent">
        <ChildComponent @mensajeEnviado="mensajeEnviado" />
        <div class="divMensaje">
            <div>
                <h3>Mensaje recibido: </h3>
            </div>
            <div>
                <h3 class="mensajeRecibido">{{ mensajeRecibido }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: 'parentComponent',
    data() {
        return {
            mensajeRecibido: '',
        }
    },
    components: {
        ChildComponent,
    },
    methods: {
        mensajeEnviado(mensaje){
            this.mensajeRecibido = mensaje;
        }
    }

}
</script>

<style scoped>

h3 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 200;
  font-size: 1rem;
}

.divMensaje {
    display: block;
    justify-content: center;
    align-items: center;
    gap: 1rem;   
    padding-top: 1rem
}

.mensajeRecibido{
    font-weight: 600;
    font-size: 3rem;
    color: blueviolet;    
}

</style>