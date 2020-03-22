import Component from "@glimmer/component";
import { action, set } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class DownloadFilesComponent extends Component {
  @tracked
  counter = 0;

  @action
  onChange(file, model) {
    set(file, "isChecked", !file.isChecked);
    const files = model;
    const filesTrue = files.filter(file => file.isChecked === true);
    this.counter = filesTrue.length;
    console.log(this.counter, model, file);
  }
}
