import Component from "@glimmer/component";
import { action, set } from "@ember/object";

export default class FileComponent extends Component {
  @action
  onChange(file) {
    set(file, "isChecked", !file.isChecked);
    console.log(file);
  }
}
