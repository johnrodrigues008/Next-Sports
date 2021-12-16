/* **********************************************
        Função para verificação de cadastro
*********************************************** */
var tags = document.getElementsByTagName("input");
var radiotags = document.getElementsByName("gender");
var compareValidator = ["compare"];
var formtag = document.getElementsByTagName("form");
function validation() {
  for (var i = 0; i < tags.length; i++) {
    var tagid = tags[i].id;
    var tagval = tags[i].value;
    var tagtit = tags[i].title;
    var tagclass = tags[i].className;
    //Validação para início de caixa de texto
    if (tags[i].type == "text") {
      if (tagval == "" || tagval == null) {
        var lbl = $(tags[i]).prev().text();
        lbl = lbl.replace(/ : /g, "");
        //alert
        $(".span" + tagid).remove();
        $("#" + tagid).after(
          "<span style='color:red;' class='span" +
            tagid +
            "'> <br>Email incorreto!" +
            lbl +
            "</span>"
        );
        $("#" + tagid).focus();
        //return false;
      } else if (tagval != "" || tagval != null) {
        $(".span" + tagid).remove();
      }
      //Validação para comparar texto em duas caixas de texto Iniciar
      //coloque duas tags com o mesmo nome de classe e coloque o nome da classe em compareValidator.
      for (var j = 0; j < compareValidator.length; j++) {
        if (tagval != "" && tagclass.indexOf(compareValidator[j]) != -1) {
          if (
            $("." + compareValidator[j])
              .first()
              .val() !=
            $("." + compareValidator[j])
              .last()
              .val()
          ) {
            $("." + compareValidator[j] + ":last").after(
              "<span style='color:red;' class='span" +
                tagid +
                "'>Invalid Text</span>"
            );
            $("span").prev("span").remove();
            $("." + compareValidator[j] + ":last").focus();
            //return false;
          }
        }
      }
      //Validação para comparar texto em duas caixas de texto Fim
      //Validação para início de email
      if (tagval != "" && tagclass.indexOf("email") != -1) {
        //enter class = e-mail onde você deseja usar o validador de e-mail
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (reg.test(tagval)) {
          $(".span" + tagid).remove();
          return true;
        } else {
          $(".span" + tagid).remove();
          $("#" + tagid).after(
            "<span style='color:red;' class='span" +
              tagid +
              "'>Email invalido</span>"
          );
          $("#" + tagid).focus();
          return false;
        }
      }
      //Validação para Fim de Email
    }
  }
  //return false;
}
function Validate() {
  if (!validation()) {
    return false;
  }
  return true;
}
function onloadevents() {
  tags[tags.length - 1].onclick = function () {
    //return Validação();
  };
  for (var j = 0; j < formtag.length; j++) {
    formtag[j].onsubmit = function () {
      return Validate();
    };
  }
  for (var i = 0; i < tags.length; i++) {
    var tagid = tags[i].id;
    var tagval = tags[i].value;
    var tagtit = tags[i].title;
    var tagclass = tags[i].className;
    if (tags[i].type == "text" && tagclass.indexOf("numeric") != -1) {
      //enter class = numérico onde você deseja usar o validador numérico
      document.getElementById(tagid).onkeypress = function () {
        numeric(event);
      };
    }
  }
}
function numeric(event) {
  var KeyBoardCode = event.which ? event.which : event.keyCode;
  if (KeyBoardCode > 31 && (KeyBoardCode < 48 || KeyBoardCode > 57)) {
    event.preventDefault();
    $(".spannum").remove();
    return false;
  }
  $(".spannum").remove();
  return true;
}
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", onloadevents, false);
}
