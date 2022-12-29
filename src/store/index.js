import { createStore } from "vuex";


import authModule from "./modules/auth";
import dataModule from "./modules/data";

const store = createStore({
    modules:{
        auth:authModule,
        data:dataModule
    }
})


export default store;