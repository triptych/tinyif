import { writable } from "svelte/store";
export const story = writable([
    {
        id: "start",
        content: `Welcome to Tiny IF! This is a small experiment with interactive fiction 
            and puzzle elements. Instead of having a set list of responses to every step 
            of the story, you are given three 'words.' You may choose to use a word at every 
            pause in the story. Or you might decide to wait until there is a good reason 
            to use up one of your word actions. Choose wisely! (hit Next)`,
        next: "start2",
        actions:[]
    },
    {
        id:"start2",
        content: `This is a sample game. Click Next to get to a passage where you should 
            choose an action.`,
        next: "second",
        actions:[]
    },
    {
        id: "second",
        content: `This is the next passage. If you do not use any actions, we will go back 
            to the start. If you choose something, that action will be 'used up' and the 
            story will change`,
        next: "start",
        actions: [
            {id:'smirk', next:"smirked"},
            {id: 'dodge', next:"dodged"},
            {id: 'kick', next: "kicked"}
        ]
    },
    {
        id: "smirked",
        content: "You smirk. Congratulations! (hit next)",
        next: "start",
        actions: []
    },
    {
        id: "dodged",
        content: "You dodge the air deftly (hit next)",
        next: "start",
        actions:[]
    },
    {
        id: "kicked",
        content: "What a powerful kick! You bust open the exit door. (hit next)",
        next: "end",
        actions: []
    },
    {
        id: "end",
        content: "You have reached the end of this story! You win!",
        next: "end",
        actions: []
    }
])