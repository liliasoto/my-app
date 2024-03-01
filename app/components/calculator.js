import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalculatorComponent extends Component {
  num1 = 0;
  num2 = 0;
  @tracked result = 0;

  @action
  handleOperation(operation) {
    const number1 = parseFloat(this.num1);
    const number2 = parseFloat(this.num2);

    switch (operation) {
      case 'add':
        this.result = number1 + number2;
        break;
      case 'subtract':
        this.result = number1 - number2;
        break;
      case 'multiply':
        this.result = number1 * number2;
        break;
      case 'divide':
        this.result = number1 / number2;
        break;
      default:
        break;
    }
  }
}