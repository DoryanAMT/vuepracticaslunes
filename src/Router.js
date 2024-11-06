import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CollatzComponent from './components/CollatzComponent.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'

//  CREAMOS UNA CONSTANTE ARRAY PARA LAS RUTAS
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/collatz", component: CollatzComponent
    },
    {
        path: "/tablamultiplicar", component: TablaMultiplicar
    },
    
]


//  CREAREMOS UNA COSNTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//  DICHO NOMBRE DE CONSTATE SERA EL QUE UTILIZAREMOS DENTRO DE Mani.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//  POR ULTIMO, EXPORTAMOS LA CONSTANTE router PARA SER UTILIZDA
//  EN App

export default router;

