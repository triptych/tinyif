<script>

import { element_is } from "svelte/internal";
import App from "../App.svelte";
import Controls from "./Controls.svelte";
import {story} from "../stores/story.js";

let text = "loading...";
let location = "start";

console.log( " story object:", $story);

$: {
    showLocation(location);
}

function showLocation(location){
    text = "";
    $story.forEach((itm, idx, arr) => {
        if(itm.id == location){
            text=itm.content;
        }
    })
}
</script>
<style>
    .stage {
        flex: 20;
        border: 2px inset grey;
    }
    .stage .content {
        height: 50vh;
        width: 100%;
        padding: 1em;
        text-align: left;
        background-color: bisque;
    }

</style>

<div class="stage">
    <div class="content">
        {text}
    </div>

</div>