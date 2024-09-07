<template>
    <div class="childComponent">
        <form @submit="enviarMensaje">
            <input v-model="mensaje" placeholder="Escribe un mensaje" type="text">
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'childComponent',
    data() {
        return {
            mensaje: '',
        }
    },
    methods: {
        enviarMensaje(){
            this.$emit('mensajeEnviado', this.mensaje);
            this.mensaje = '';
        }
    }
};
</script>

<style scoped>

form {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

input, button {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 200;
  font-size: 1.2rem;
  border: 1px solid blueviolet;
}

</style>