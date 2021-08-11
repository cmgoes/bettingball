import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
    Quasar,
    Notify
} from 'quasar'

Vue.use(Quasar, {
    config: {
        brand: {
            primary: '#3c40c6',
            secondary: '#1e272e',
            accent: '#eb2f06',
            dark: '#1d1d1d',
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037',
            cloud: '#1e272e2e'
        }
    },
    plugins: {
        Notify
    }
})