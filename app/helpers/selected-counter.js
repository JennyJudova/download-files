import { helper } from "@ember/component/helper";

export default helper(function selectedCounter(params /*, hash*/) {
  const files = params;
  const filesTrue = files.filter(file => file.isChecked === true);
  const counter = filesTrue.length;
  return counter;
});
