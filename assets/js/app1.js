import { avatar } from "./appJTR";

// function showAvatar(avatar) {
//   document.getElementById("imagen");
//   document.avatar.src = avatar[1];
// }
// showAvatar();
function showTable() {
  let formDisplay = document.querySelector("#formulary");

  let formHtml = `<div>`;
  array.forEach(function (acc, index) {
    if (index < 11) {
      avatarHtml =
        avatarHtml +
        `<from action="/onclick" class="">
          <label for='name'>Introduzca el nombre de los participantes: </label>
          <input type='text' name='name' id='name' required>
         <input type='onclick'>
         </div>`;
    }
  });

  formHtml = formHtml + `</div>`;
  formDisplay.innerHTML = formHtml;
}
showTable();
