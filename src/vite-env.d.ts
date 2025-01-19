/// <reference types="vite/client" />

import Container from "./components/layout/Container.vue";


declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        Container: typeof Container
    }
}