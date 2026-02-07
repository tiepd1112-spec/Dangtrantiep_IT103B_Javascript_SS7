let players = [];

let numberOfPlayers = parseInt(prompt("Nhập số lượng cầu thủ cần thêm:"));

for (let i = 0; i < numberOfPlayers; i++) {
  alert(`Nhập thông tin cầu thủ thứ ${i + 1}`);

  let id;
  let isDuplicate;

  do {
    isDuplicate = false;
    id = prompt("Nhập mã cầu thủ:");

    // kiểm tra mã cầu thủ có bị trùng không
    for (let j = 0; j < players.length; j++) {
      let info = players[j].split("-");
      if (info[0] === id) {
        isDuplicate = true;
        alert("Mã cầu thủ đã tồn tại!");
        break;
      }
    }
  } while (isDuplicate);

  let name;
  do {
    name = prompt("Nhập tên cầu thủ:");
  } while (name === ""); // không cho tên rỗng

  let position = "";
  let choice;

  do {
    choice = prompt(
      `Chọn vị trí:
1 - Thủ môn
2 - Hậu vệ
3 - Tiền vệ
4 - Tiền đạo`
    );

    if (choice == "1") position = "Thủ môn";
    else if (choice == "2") position = "Hậu vệ";
    else if (choice == "3") position = "Tiền vệ";
    else if (choice == "4") position = "Tiền đạo";
    else position = "";
  } while (position === "");

  
  let playerInfo = `${id}-${name}-${position}`;
  players.push(playerInfo); 
}

function printTeamRoster() {
  console.log("--- DANH SÁCH ĐỘI BÓNG ---");
  for (let i = 0; i < players.length; i++) {
    let info = players[i].split("-"); 
    console.log(
      `${i + 1}. Mã: ${info[0]} | Tên: ${info[1]} | Vị trí: ${info[2]}`
    );
  }
}

function pushPlayer(playerInfo) {
  players.push(playerInfo); 
}

printTeamRoster();
