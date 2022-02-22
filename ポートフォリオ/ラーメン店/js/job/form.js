function ConfirmForm() {
  console.log("確認画面を押しました。");
  var formConf_elm = document.getElementById("formConf-fadeIn");
  formConf_elm.classList.add('show');
  document.body.classList.add('fixed','noscroll');

  //フォーム変数定義
  const name01 = document.formname.name01.value;
  const name02 = document.formname.name02.value;
  const year = document.formname.year.value;
  const month = document.formname.month.value;
  const day = document.formname.day.value;
  const genderRadio = document.getElementsByName('gender');
  const len = genderRadio.length;
  let gender = '';
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

  if(name01 === "") {
    console.log("name01が入力されていません");
  }

  // window.open('../index.html', '_blank');//別タブで開く

  //確認ページの要素取得
  var name01_elm = document.getElementById("name01_Conf");
  var name02_elm = document.getElementById("name02_Conf");
  var year_elm = document.getElementById("year_Conf");
  var month_elm = document.getElementById("month_Conf");
  var day_elm = document.getElementById("day_Conf");
  var gender_elm = document.getElementById("gender_Conf");
  var email_elm = document.getElementById("email_Conf");
  var tel_elm = document.getElementById("tel_Conf");
  var job_elm = document.getElementById("job_Conf");
  var address01_elm = document.getElementById("address01_Conf");
  var address02_elm = document.getElementById("address02_Conf");

  //確認ページ値代入
  name01_elm.innerHTML = name01;
  name02_elm.innerHTML = name02;
  year_elm.innerHTML = year;
  month_elm.innerHTML = month;
  day_elm.innerHTML = day;
  gender_elm.innerHTML = gender;
  email_elm.innerHTML = email;
  tel_elm.innerHTML = tel;
  job_elm.innerHTML = job;
  address01_elm.innerHTML = address01;
  address02_elm.innerHTML = address02;
}

function ConfirmForm_close() {
  var fixButton_elm = document.getElementById("formConf-fadeIn");
  fixButton_elm.classList.remove('show');
  document.body.classList.remove('fixed','noscroll');
}