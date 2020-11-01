<script>

import { element_is } from "svelte/internal";
import App from "../App.svelte";
import Controls from "./Controls.svelte";
import {story} from "../stores/story.js";
import {state} from "../stores/state";

let text = "loading...";
export let location;

console.log( " story object:", $story);
console.log("location:", location);

$: {
    showLocation(location);
}

function showLocation(location){
    console.log("ShowLocation location:", location);
    console.log("ShowLocation $state:", $state);
    text = "";
    $story.forEach((itm, idx, arr) => {
        if(itm.id == location){
            text=itm.content;
            if(itm.actions.length > 0 ){
                $state.actions = true;
            } else {
                $state.actions = false;
            }
            $state = $state;
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
        min-height: 50vh;
        width: 100%;
        padding: 1em;
        text-align: left;
        background-color: bisque;
        color: black;
    }

    @media (max-width: 43em) {
        .stage {
            border: 1px solid red;
            flex: 50;
        }
	}

</style>

<div class="stage">
    <div class="content">
        {text}
    </div>

</div>