<script>
	let isEditing = false;
	let noteText = 'Click to edit';

	function toggleEdit() {
		isEditing = !isEditing;
		if (!isEditing) {
			// Save the edited text or do whatever you want here
		}
	}
</script>

{#if isEditing}
	<textarea bind:value={noteText} on:blur={toggleEdit}></textarea>
{:else}
	<div class="sticky-note" on:click={toggleEdit}>
		{@html noteText}
	</div>
{/if}

<style>
	.sticky-note {
		border: 2px solid #ffd700;
		background-color: #fffacd;
		padding: 10px;
		width: 200px;
		height: 200px;
		cursor: pointer;
		overflow: auto;
	}

	textarea {
		width: 100%;
		height: 100%;
		resize: none;
		border: none;
		outline: none;
		font-size: inherit;
		font-family: inherit;
		padding: 5px;
	}
</style>
