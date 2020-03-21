import Route from "@ember/routing/route";

export default class DownloadRoute extends Route {
  data = [
    {
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled"
    },
    {
      name: "netsh.exe",
      device: "Targaryen",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available"
    },
    {
      name: "uxtheme.dll",
      device: "Lanniester",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
      status: "available"
    },
    {
      name: "cryptbase.dll",
      device: "Martell",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
      status: "scheduled"
    },
    {
      name: "7za.exe",
      device: "Baratheon",
      path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
      status: "scheduled"
    }
  ];
  model() {
    const tempData = this.data;
    const isChecked = { isChecked: false };
    const updatedData = tempData.map(object =>
      Object.assign(object, isChecked)
    );
    return updatedData;
  }
}
