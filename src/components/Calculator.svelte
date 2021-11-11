<script>
  import Line from "./Line.svelte";
	import Button from "./Button.svelte";
  import Display from "./Display.svelte";
</script>

<div class="calculator">
  <Display value="1234567890123456789" />
  <Line>
    <Button text="AC" triple highlight />
    <Button text="/" operation />
  </Line>
  <Line>
    <Button text="7" />
    <Button text="8" />
    <Button text="9" />
    <Button text="*" operation />
  </Line>
  <Line>
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button text="+" operation />
  </Line>
  <Line>
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button text="-" operation />
  </Line>
  <Line>
    <Button text="0" double />
    <Button text="," />
    <Button text="=" highlight />
  </Line>
</div>

<style>
  .calculator {
    width: 150px;
    height: 220px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
    background-color: var(--bg-color);
  }
</style>