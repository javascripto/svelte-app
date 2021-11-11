<script>
  import Line from "./Line.svelte";
	import Button from "./Button.svelte";
</script>

<div class="calculator">
  <Line>
    <Button text="AC" triple />
    <Button text="/" />
  </Line>
  <Line>
    <Button text="7" />
    <Button text="8" />
    <Button text="9" />
    <Button text="*" />
  </Line>
  <Line>
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button text="+" />
  </Line>
  <Line>
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button text="-" />
  </Line>
  <Line>
    <Button text="0" double />
    <Button text="," />
    <Button text="=" />
  </Line>
</div>

<style>
  .calculator {
    width: 150px;
    height: 220px;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
  }
</style>