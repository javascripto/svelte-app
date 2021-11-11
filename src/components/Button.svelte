<script lang="ts">

export let text = '';
export let double = false;
export let triple = false;

</script>

<button class="button" class:triple={triple} class:double>
  {text}
</button>

<style>
  .button {
    flex-basis: 25%;
  }
  .double {
    flex-basis: 50%;
  }
  .triple {
    flex-basis: 75%;
  }
</style>