import Component from "@glimmer/component";
import { action, set } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class DownloadFilesComponent extends Component {
  @tracked
  counter = 0;

  @tracked
  allChecked = false;

  @action
  onChange(file, model) {
    set(file, "isChecked", !file.isChecked);
    const filesTrue = model.filter(file => file.isChecked === true);
    this.counter = filesTrue.length;
    let checkboxAll = document.getElementById("allCheckbox");
    if (this.counter === 0) {
      checkboxAll.indeterminate = false;
      this.allChecked = false;
    } else if (this.counter === model.length) {
      checkboxAll.indeterminate = false;
      this.allChecked = true;
    } else {
      checkboxAll.indeterminate = true;
      this.allChecked = false;
    }
  }

  @action
  handleAllCheck(model) {
    this.allChecked = !this.allChecked;
    if (this.allChecked === false) {
      this.counter = 0;
      model.map(file => set(file, "isChecked", false));
    } else if (this.allChecked === true) {
      this.counter = model.length;
      model.map(file => set(file, "isChecked", true));
    }
  }

  @action
  onDownload(model) {
    console.log("download");
  }
}
