import { createApp } from 'vue'
import App from './App.vue'

//  POR ULTIMO DEBEMOS IMPORTAR ROUTER PARA PODER USARLO

import router from './Router.js';
//  COMENZAMOS CREANDO NUESTRA CREACION DE APLICAION EN UNA
//  VARIABLE
var app = createApp(App);

app.config.globalProperties.$filters = {
    getParImpar(num){
        if (num % 2 == 0) {
            return "<h4 style='color:green'>Par</h4>";
        }else{
            return "<h4 style='color:red'>Impar</h4>";
        }
    },
    getOperacion(num, multi){
        return num+ " * " +multi
    },
    getMultiplicacion(num, multi){
        return num * multi
    }
}
//  SE UTILIZAR .use(router)
app.use(router).mount('#app');
