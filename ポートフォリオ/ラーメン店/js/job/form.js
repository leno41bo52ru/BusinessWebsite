//フォームテキストファイルに出力
function ConfirmForm() {
  console.log("確認画面を押しました。");

  const name01 = document.formname.name01.value;
  const name02 = document.formname.name02.value;
  const year = document.formname.year.value;
  const month = document.formname.month.value;
  const day = document.formname.day.value;
  let genderRadio = document.getElementsByName('gender');
  let len = genderRadio.length;
  let checkValue = '';
  for (let i = 0; i < len; i++){
    if (genderRadio.item(i).checked){
      gender = genderRadio.item(i).value;
    }
  }
  const email = document.formname.email.value;
  const tel = document.formname.tel.value;
  const job = document.formname.job.value;
  const address01 = document.formname.address01.value;
  const address02 = document.formname.address02.value;
  console.log("name01=" + name01);
  console.log("name02=" + name02);
  console.log("year=" + year);
  console.log("month=" + month);
  console.log("day=" + day);
  console.log("gender=" + gender);
  console.log("email=" + email);
  console.log("tel=" + tel);
  console.log("job=" + job);
  console.log("address01=" + address01);
  console.log("address02=" + address02);
  window.open('../index.html', '_blank');//別タブで開く
  // window.location.href = '../index.html';


  // var text = "'" +
  //     document.formname.name01.value + "','" +
  //     document.formname.name02.value + "','" +
  //     document.formname.year.value + "','" +
  //     document.formname.month.value + "','" +
  //     document.formname.day.value + "','" +
  //     document.formname.gender.value + "','" +
  //     document.formname.email.value + "','" +
  //     // document.formname.tell.value + "','" +
  //     document.formname.job.value + "','" +
  //     document.formname.address01.value + "','" +
  //     document.formname.address02.value + "'";
  // var blob = new Blob([text], { "type": "text/plain" });

  // //IEの場合
  // if (window.navigator.msSaveBlob) {
  //     window.navigator.msSaveBlob(blob, "outFileFromWindows.txt");
  // //IE以外の場合
  // } else {
  //     document.getElementById("createFile").href = window.URL.createObjectURL(blob);
  // }
}