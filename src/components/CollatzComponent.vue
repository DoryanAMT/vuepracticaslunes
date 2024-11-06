<template>
  <div>
    <h1>Collatz Component</h1>

    <label>Introduce un numero</label>
    <input type="number" v-model="numero" />
    <button @click="conjeturaCollatz()">Probar</button>

    <div v-html="$filters.getParImpar(numero)">
      
    </div>

    <ul v-for="num in aux" :key="num">
      <li>{{num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  methods: {
    conjeturaCollatz() {
      var numero = this.numero;
      var aux = [];
      while (numero != 1) {
        if (numero % 2 == 0) {
          numero = numero / 2;
          aux.push(numero);
          // console.log(numero)
        } else {
          numero = numero * 3 + 1;
          aux.push(numero);
          // console.log(numero)
        }
      }
      this.aux = aux
      console.log(this.aux)
    },
  },
  data() {
    return {
      numero: 0,
      aux: [],
    };
  },
};
</script>

<style>
</style>