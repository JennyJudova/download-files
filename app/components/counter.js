import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action, set } from "@ember/object";

export default class CounterComponent extends Component {
  @tracked
  counter = 0;

  @tracked
  model = {};

  updateCounter(model) {
    const files = model;
    const filesTrue = files.filter(file => file.isChecked === true);
    this.counter = filesTrue.length;
    console.log(this.counter, model);
  }
}
