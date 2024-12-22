import { Modal, Collapse, Dropdown } from 'bootstrap';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('Modal', Modal);
    nuxtApp.provide('Collapse', Collapse);
    nuxtApp.provide('Dropdown', Dropdown);
})
