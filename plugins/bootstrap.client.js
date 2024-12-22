import { Modal, Collapse, Dropdown } from 'bootstrap';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('Modal', Modal);
})
