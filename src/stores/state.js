import { writable } from "svelte/store";

export let state = writable({
    location: "start",
    actions: false
});