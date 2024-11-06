<template>
  <div>
    <label for="">Introduce un número: </label>
    <input type="number" v-model="numero" />
    <button @click="getOperacion()">tabla</button>
    <br />
    <table style="background-color:teal">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody v-html="html"></tbody>
    </table>
    <table style="background-color:lightgreen">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ numero }} * {{i}}</td>
          <td>{{ numero * i }}</td>
        </tr>
      </tbody>
    </table>
    <table style="background-color:lightblue">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{$filters.getOperacion(numero, i)}}</td>
          <td>{{$filters.getMultiplicacion(numero, i)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  methods: {
    getOperacion() {
      var num = this.numero;
      var aux = ""

      for (let i = 1; i <= 10; i++) {
        //html
        aux +=
          "<tr>" +
            "<td>" + num + " * " + i + "</td>" +
            "<td>" + num * i + "</td>" +
          "</tr>";
      }
      this.html = aux;
    },
  },
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
};
</script>

<style >
table {
  display: inline;
}
</style>