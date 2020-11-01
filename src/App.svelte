<script>
	import TailwindStyles from './TailwindStyles.svelte';
	import Footer from './components/Footer.svelte';
	import Stage from './components/Stage.svelte';
	import Controls from './components/Controls.svelte';

	import {state} from './stores/state';
	import {story} from "./stores/story";
	import {actions} from "./stores/actions";
	
	const message = 'Learn Svelte';
	let loc="start";

	function handleNext(event){
		console.log("handleNext timestamp: ", event.detail.timeStamp);
		console.log("handleNext action: ", event.detail.action);
		console.log("state:", $state );
		console.log('story:', $story);
		console.log('actions:', $actions);
		let newLoc = "";
		if(event.detail.action != ""){
			newLoc = event.detail.action;
			$state.location = newLoc;
		}else {
			newLoc = getNextFromNow();
		}
		
		loc = newLoc;
	}

	function getNextFromNow(){
		console.log("getNext: state->", $state);
		console.log("getNext: story->", $story);
		let oldLocation = $state.location;
		let newLocation = "";
		$story.forEach((itm, idx, arr) => {
        if(itm.id == oldLocation){
            newLocation=itm.next;
        	}
		});
		console.log("getNext newLocation:", newLocation);
		$state.location = newLocation;
		return newLocation;
	}
</script>

<style>
	.App-logo {
		animation: App-logo-scale infinite 1.6s ease-in-out alternate;
	}
	.header {
		display: none;
	}
	@keyframes App-logo-scale {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.06);
		}
	}

	main {
		display: flex;
		justify-content: center;	
	}

	:global(body) {
		background-color: #ff9d00;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
		font-family:monospace;
		color:bisque;
	}

</style>

<div class="text-center font-serif">
	<!--
	<header class="bg-gray-100 h-screen flex justify-center items-center flex-col text-3xl">
		<img src="/logo.svg" class="App-logo pointer-events-none m-4 h-64" alt="logo" />
		<p>
			Edit <code>src/App.svelte</code> and save to reload. Edited again
		</p>
		<a
			class="text-orange-500"
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			{message}
		</a>
	</header>-->
	<header>
		<h1>Welcome to TinyIF</h1>
		<p>
			Tiny IF is a small three act story. 
			You only have 3 "actions" you can use. 
			Try to win using the right order of actions.
		</p>
	</header>
	<main role="main">
		<Stage location={loc}></Stage>
		<Controls on:next={handleNext} ></Controls>
	</main>
	<Footer/>
</div>
