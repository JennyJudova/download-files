import { helper } from "@ember/component/helper";

export default helper(function selectedCounter(params /*, hash*/) {
  if (params[0] === 0) {
    return "None Selected";
  } else {
    return `Selected ${params[0]}`;
  }
});
