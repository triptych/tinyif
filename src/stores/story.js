import { writable } from "svelte/store";
export const story = writable([
    {
        id: "start",
        content: " Welcome to Tiny IF! This is a small experiment with interactive fiction and puzzle elements. Instead of having a set list of responses to every step of the story, you are given three 'words.' You may choose to use a word at every pause in the story. Or you might decide to wait until there is a good reason to use up one of your word actions. Choose wisely! ",
        next: "next"
    },
    {
        id: "next",
        content: "This is the next passage",
        next: "start"
    }
])