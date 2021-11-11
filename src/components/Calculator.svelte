<script lang="ts">
  import Line from "./Line.svelte";
	import Button from "./Button.svelte";
  import Display from "./Display.svelte";

  let _value = '0';

  function onClick(value: string) {
    _value += value
  }

</script>

<div class="calculator">
  <Display value={_value} />
  <Line>
    <Button text="AC" triple highlight />
    <Button text="/" operation />
  </Line>
  <Line>
    <Button text="7" onClick={onClick} />
    <Button text="8" onClick={onClick} />
    <Button text="9" onClick={onClick} />
    <Button text="*" operation />
  </Line>
  <Line>
    <Button text="4" onClick={onClick} />
    <Button text="5" onClick={onClick} />
    <Button text="6" onClick={onClick} />
    <Button text="+" operation />
  </Line>
  <Line>
    <Button text="1" onClick={onClick} />
    <Button text="2" onClick={onClick} />
    <Button text="3" onClick={onClick} />
    <Button text="-" operation />
  </Line>
  <Line>
    <Button text="0" double onClick={onClick} />
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