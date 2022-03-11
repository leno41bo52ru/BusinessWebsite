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
    var alertText_element = document.querySelectorAll('#id_form td span');
    console.log("alertText_element[0]=" + alertText_element[0]);
    
    // var alertbox_element = document.getElementById('alertbox');// id属性で要素を取得
    var confFlag = [];
    //クリックされるたびにalertTextの中身を空にする。
    for(let i = 0; i < alertText_element.length; i++) {
      alertText_element[i].innerText = "";
      alertText_element[i].classList.remove("alertText");
    }

    //氏名チェック
    if(name01 === "") {
      // alertText_element[0].innerHTML = "<span class='alertText'>氏名を入力してください。</span>";
      alertText_element[0].innerText = "氏名を入力してください。";
      alertText_element[0].classList.add("alertText");
      // textbox.replaceChild("<span class='alertText'>氏名を入力してください。</span>", alertText_element[0]);
      // console.log("alertText_element[0]=" + alertText_element[0]);
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //ひらがなチェック
    if(name02.match(/^[ぁ-んー　]+$/)) {//"ー"の後ろの文字は全角スペースです。
      confFlag.push('true');
    } else if(name02 === "") {
      alertText_element[1].innerText = "ふりがなを入力してください。";
      alertText_element[1].classList.add("alertText");
      confFlag.push('false');
    } else {
      alertText_element[1].innerText = "ふりがなは全角ひらがなで入力してください。";
      alertText_element[1].classList.add("alertText");
      confFlag.push('false');
    }

    //生年月日チェック
    if(year === "" || month === "" || day === "") {
      alertText_element[2].innerText = "生年月日を選択してください。";
      alertText_element[2].classList.add("alertText");
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //性別チェック
    if(gender === "") {
      alertText_element[3].innerText = "性別を選択してください。";
      alertText_element[3].classList.add("alertText");
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    // メールアドレスチェック
    const mailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (mailPattern.test(email)) {
      confFlag.push('true');
     } else if(email === "") {
      alertText_element[4].innerText = "メールアドレスを入力してください。";
      alertText_element[4].classList.add("alertText");
      confFlag.push('false');
    } else {
      // パターンにマッチしない場合
      alertText_element[4].innerText = "メールアドレスに間違いがあります。";
      alertText_element[4].classList.add("alertText");
      confFlag.push('false');
    }

    //電話番号チェック
    const telPattern = /^(0{1}\d{9,10})$/;
    if (telPattern.test(tel)) {
      confFlag.push('true');
    } else if(tel === "") {
      alertText_element[5].innerText = "電話番号を入力してください。";
      alertText_element[5].classList.add("alertText");
      confFlag.push('false');
    } else {
      // パターンにマッチしない場合
      alertText_element[5].innerText = "電話番号は0から始まる半角数字のみで10～13文字以内で入力してください。";
      alertText_element[5].classList.add("alertText");
      confFlag.push('false');
    }

    //職業チェック
    if(job === "") {
      alertText_element[6].innerText = "職業を入力してください。";
      alertText_element[6].classList.add("alertText");
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //住所チェック
    if(address01 === "") {
      alertText_element[7].innerText = "住所を入力してください。";
      alertText_element[7].classList.add("alertText");
      confFlag.push('false');
    } else {
      confFlag.push('true');
    }

    //確認フォーム表示フラグ確認
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