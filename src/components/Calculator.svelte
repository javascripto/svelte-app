<script lang="ts">
  import Line from "./Line.svelte";
	import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import CalculatorModel from "../models/Calculator";

  let calc = new CalculatorModel();
  const pressClear = () => calc = calc.clear()
  const pressPoint = () => calc = calc.typePoint()
  const pressEqual = () => calc = calc.calculate()
  const pressNumber = (number: string) => calc = calc.typeNumber(number)
  const pressOperator = (operator: string) => calc = calc.typeOperator(operator)
</script>

<div class="calculator">
  <Display value={calc.value} />
  <Line>
    <Button text="AC" triple highlight onClick={pressClear} />
    <Button text="/" operation onClick={pressOperator} />
  </Line>
  <Line>
    <Button text="7" onClick={pressNumber} />
    <Button text="8" onClick={pressNumber} />
    <Button text="9" onClick={pressNumber} />
    <Button text="*" operation onClick={pressOperator} />
  </Line>
  <Line>
    <Button text="4" onClick={pressNumber} />
    <Button text="5" onClick={pressNumber} />
    <Button text="6" onClick={pressNumber} />
    <Button text="+" operation onClick={pressOperator} />
  </Line>
  <Line>
    <Button text="1" onClick={pressNumber} />
    <Button text="2" onClick={pressNumber} />
    <Button text="3" onClick={pressNumber} />
    <Button text="-" operation onClick={pressOperator} />
  </Line>
  <Line>
    <Button text="0" double onClick={pressNumber} />
    <Button text="," onClick={pressPoint} />
    <Button text="=" highlight onClick={pressEqual} />
  </Line>
</div>

<style>
  .calculator {
    zoom: 2;
    width: 150px;
    height: 220px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
    background-color: var(--bg-color);
  }
</style>
