const CLEAR_SCREEN = true;
const DO_NOT_CLEAR_DISPLAY = false;

export default class Calculator {
  #value: string | null;
  #accumulator: number | null;
  #operation: string | null;
  #clearDisplay: boolean;

  constructor(
    value: string = null,
    accumulator: number = null,
    operation: string = null,
    clearDisplay: boolean = false,
  ) {
    this.#value = value 
    this.#accumulator = accumulator 
    this.#operation = operation 
    this.#clearDisplay = clearDisplay 
  }

  get value() {
    return this.#value?.replace?.('.', ',') ?? '0'
  }

  typeNumber(pressedNumber: string) {
    const newValue = this.#clearDisplay || !this.#value
      ? pressedNumber
      : `${this.#value}${pressedNumber}`

    return new Calculator(
      newValue,
      this.#accumulator,
      this.#operation,
      DO_NOT_CLEAR_DISPLAY
    );
  }

  typePoint() {
    const newValue = this.#value?.includes?.('.') ? this.#value : `${this.#value}.`
    return new Calculator(
      newValue,
      this.#accumulator,
      this.#operation,
      DO_NOT_CLEAR_DISPLAY,
    );
  }

  clear() {
    return new Calculator();
  }

  typeOperator(nextOperation: string) {
    return this.calculate(nextOperation)
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)
    const value = this.#operation
      ? `${accumulator}`
      : this.#value;

    return new Calculator(
      value,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_SCREEN : DO_NOT_CLEAR_DISPLAY,
    );
  }
}
