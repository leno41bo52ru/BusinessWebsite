function ConfirmForm() {
  console.log("確認画面を押しました。");
  // document.formname.name01.classList.add("alert");

  //フォーム変数定義
  const name01 = document.formname.name01.value;
  const name02 = document.formname.name02.value;
  const year = document.formname.year.value;
  const month = document.formname.month.value;
  const day = document.formname.day.value;
  const genderRadio = document.getElementsByName('gender');
  let gender = '';
  for (let i = 0; i < genderRadio.length; i++){
    if (genderRadio.item(i).checked){
      gender = genderRadio.item(i).value;
    }
  }
  const email = document.formname.email.value;
  const tel = document.formname.tel.value;
  const job = document.formname.job.value;
  const address01 = document.formname.address01.value;
  const address02 = document.formname.address02.value;

  alertText();

  //フォームアラート表示
  function alertText() {
    var alertbox_element = document.getElementById('alertbox');// id属性で要素を取得
    var confFlag = [];
    alertbox_element.innerHTML = "";//クリックされるたびにalertboxの中身を空にする。


    //氏名チェック
    if(name01 === "") {
      var name01_element = document.createElement('p');
      name01_element.textContent = '氏名を入力してください。';
      alertbox_element.appendChild(name01_element);
      confFlag.push('false');
    } else {
      confFlag.push('true');
      // console.log("true=" + confFlag[0]);
    }

    //ひらがなチェック
    if(name02.match(/^[ぁ-んー　]+$/)) {    //"ー"の後ろの文字は全角スペースです。
      confFlag.push('true');
    } else if(name02 === "") {
      var name02_element = document.createElement('p');
      name02_element.textContent = 'ふりがなを入力してください。';
      alertbox_element.appendChild(name02_element);
      confFlag.push('false');
    } else {
      var name02_element = document.createElement('p');
      name02_element.textContent = 'ふりがなは全角ひらがなで入力してください。';
      alertbox_element.appendChild(name02_element);
      confFlag.push('false');
    }

    //生年月日チェック
    if(year === "" || month === "" || day === "") {
      var birthday_element = document.createElement('p');
      birthday_element.textContent = '生年月日を選択してください。';
      alertbox_element.appendChild(birthday_element);
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //性別チェック
    if(gender === "") {
      var gender_element = document.createElement('p');
      gender_element.textContent = '性別を選択してください。';
      alertbox_element.appendChild(gender_element);
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    // メールアドレスチェック
    const mailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (mailPattern.test(email)) {
      confFlag.push('true');
     } else if(email === "") {
      var email_element = document.createElement('p');
      email_element.textContent = 'メールアドレスを入力してください。';
      alertbox_element.appendChild(email_element);
      confFlag.push('false');
    } else {
      // パターンにマッチしない場合
      var email_element = document.createElement('p');
      email_element.textContent = 'メールアドレスに間違いがあります。';
      alertbox_element.appendChild(email_element);
      confFlag.push('false');
    }

    //電話番号チェック
    const telPattern = /^(0{1}\d{9,10})$/;
    if (telPattern.test(tel)) {
      confFlag.push('true');
    } else if(tel === "") {
      var tel_element = document.createElement('p');
      tel_element.textContent = '電話番号を入力してください。';
      alertbox_element.appendChild(tel_element);
      confFlag.push('false');
    } else {
      // パターンにマッチしない場合
      var tel_element = document.createElement('p');
      tel_element.textContent = '電話番号は0から始まる半角数字のみで10～13文字以内で入力してください。';
      alertbox_element.appendChild(tel_element);
      confFlag.push('false');
    }

    //職業チェック
    if(job === "") {
      var job_element = document.createElement('p');
      job_element.textContent = '職業を入力してください。';
      alertbox_element.appendChild(job_element);
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //住所チェック
    if(address01 === "") {
      var address01_element = document.createElement('p');
      address01_element.textContent = '住所を入力してください。';
      alertbox_element.appendChild(address01_element);
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    var confFlagAll = confFlag.every(value => value === "true")
    if (confFlagAll) {
      fadeIn();
    } else {
      console.log("falseがあります");
    }
  }

  //確認フォームフェードイン
  function fadeIn() {
    var formConf_elm = document.getElementById("formConf-fadeIn");
    formConf_elm.classList.add('show');
    document.body.classList.add('fixed','noscroll');
  }

  formCopy();
  //確認フォーム値コピー
  function formCopy() {
    var name01Conf_elm = document.getElementById("name01_Conf");
    var name02Conf_elm = document.getElementById("name02_Conf");
    var yearConf_elm = document.getElementById("year_Conf");
    var monthConf_elm = document.getElementById("month_Conf");
    var dayConf_elm = document.getElementById("day_Conf");
    var genderConf_elm = document.getElementById("gender_Conf");
    var emailConf_elm = document.getElementById("email_Conf");
    var telConf_elm = document.getElementById("tel_Conf");
    var jobConf_elm = document.getElementById("job_Conf");
    var address01Conf_elm = document.getElementById("address01_Conf");
    var address02Conf_elm = document.getElementById("address02_Conf");

    name01Conf_elm.innerHTML = name01;
    name02Conf_elm.innerHTML = name02;
    yearConf_elm.innerHTML = year;
    monthConf_elm.innerHTML = month;
    dayConf_elm.innerHTML = day;
    genderConf_elm.innerHTML = gender;
    emailConf_elm.innerHTML = email;
    telConf_elm.innerHTML = tel;
    jobConf_elm.innerHTML = job;
    address01Conf_elm.innerHTML = address01;
    address02Conf_elm.innerHTML = address02;
  }
}

function ConfirmForm_close() {
  var fixButton_elm = document.getElementById("formConf-fadeIn");
  fixButton_elm.classList.remove('show');
  document.body.classList.remove('fixed','noscroll');
}