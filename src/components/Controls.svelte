<script>
    import {createEventDispatcher} from "svelte";
    
    const dispatch = createEventDispatcher();

    function nextText() {
        console.log("nextText called with dispatch");
        dispatch("next", {
            timeStamp: new Date().getMilliseconds()
        })
    }

</script>
<style>
    .controls {
        flex: 10;
        border: 1px solid black;
        background-color:blanchedalmond;
        font-family: monospace;
        color: black;
    }

    ul{
        display: flex;
        justify-content: center;
    }
</style>
<div class="controls">
    <h2>Tiny IF</h2>
    <span>By Andrew Wooldridge</span>
    <div class="buttons">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Game</button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save Game</button>
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Load Game</button>
    </div>
    <div class="word-list">
        <ul>
            <li><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Dodge</button></li>
            <li><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Smirk</button></li>
            <li><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Kick</button></li>
        </ul>
    </div>
    <div class="actions">
        <button 
            class="font-bold bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
            on:click={nextText}>[Next]</button>
    </div>
</div>