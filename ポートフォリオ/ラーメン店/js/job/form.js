//フォームテキストファイルに出力
function dispText() {
  var text = "'" +
      document.formname.name01.value + "','" +
      document.formname.name02.value + "','" +
      document.formname.year.value + "','" +
      document.formname.month.value + "','" +
      document.formname.day.value + "','" +
      document.formname.gender.value + "','" +
      document.formname.email.value + "','" +
      document.formname.tell.value + "','" +
      document.formname.job.value + "','" +
      document.formname.address01.value + "','" +
      document.formname.address02.value + "'";
  var blob = new Blob([text], { "type": "text/plain" });

  //IEの場合
  if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, "outFileFromWindows.txt");
  //IE以外の場合
  } else {
      document.getElementById("createFile").href = window.URL.createObjectURL(blob);
  }
}