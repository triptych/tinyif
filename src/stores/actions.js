import { writable } from "svelte/store";

export let actions = writable([
    {
        id: "dodge",
        content: "dodge",
        used: "false"
    },
    {
        id: "smirk",
        content: "smirk",
        used: "false"
    }
    {
        id: "kick",
        content: "kick",
        used: "false"
    }
]);