<script lang="ts">

  export let text = '';
  export let double = false;
  export let triple = false;
  export let operation = false;
  export let highlight = false;
  export let onClick = (value: string) => {};

  function handleClick() {
    onClick(text);
  }
</script>

<button
  class="button"
  class:triple
  class:double
  class:operation
  class:highlight
  on:click={handleClick}>
  {text}
</button>

<style>
  .button {
    margin: 0;
    border: 1px solid var(--bg-color);
    flex-basis: 25%;
  }
  .double {
    flex-basis: 50%;
  }
  .triple {
    flex-basis: 75%;
  }
  .operation {
    color: white;
    background-color: orange;
  }
  .highlight {
    color: white;
    background-color: red;
  }
</style>