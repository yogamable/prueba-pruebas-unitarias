<template>
  <div class="home">
    <h1>Desafío Pruebas Unitarias</h1>
    <div class="contador">
      <h2>Contador</h2>
      <ContadorComponent />
    </div>
    <div class="comunicacion">
      <h2>Comunicación entre componentes</h2>
      <ParentComponent />
    </div>
  </div>
</template>

<script>
import ContadorComponent from '@/components/ContadorComponent.vue';
import ParentComponent from '@/components/ParentComponent.vue';


export default {
  name: 'HomeView',
  components: {
    ContadorComponent,
    ParentComponent,
  }
}
</script>

<style scoped >
h1 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
  padding: 2rem;
  color: blueviolet
}
h2 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 200;
  padding-bottom: 1.5rem;
}
div {
  margin: .5rem;
}
.contador{
  padding: 2rem;
  border: 1px blueviolet solid;
}
.comunicacion{
  padding: 2rem;
  border: 1px black solid;
}

</style>
