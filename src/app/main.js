/*******************************************************
 * * Instancia principal de Vue.js
 *******************************************************/
import Vue from 'vue'

/*******************************************************
 * * Manejador de rutas de Vue.js
 *******************************************************/
import VueRouter from 'vue-router'
Vue.use(VueRouter)



/*******************************************************
 * * Vuesax
 *******************************************************/
import Vuesax from 'vuesax'
Vue.use(Vuesax)

/*******************************************************
 * * Importar Templates
 *******************************************************/
import Inicio from './Component/Template/Inicio.vue'

/*******************************************************
 * * Rutas
 *******************************************************/
const routes = [{
        name: 'Inicio',
        path: '/',
        component: Inicio
    }
]

/*******************************************************
 * * Configuración global de Vue.js
 *******************************************************/
import App from './App.vue'

const router = new VueRouter({
    routes: routes
})
new Vue(Vue.util.extend({
    router
}, App)).$mount('#app').store