let playerIds = [];
let playerPositions = [];
let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for(let i = 0; i < n; i++) {
    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt(`Nhập mã cầu thủ ${i + 1}:`);

        for(let j = 0; j < playerIds.length; j++) {
            if(playerIds[j] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại, nhập lại!");
                break;
            }
        }
    } while(isDuplicate || id === "");

    let positionNumber = +prompt( "Nhập vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");

    let position = "";
    if(positionNumber === 1) position = "Thủ môn";
    else if(positionNumber === 2) position = "Hậu vệ";
    else if(positionNumber === 3) position = "Tiền vệ";
    else if(positionNumber === 4) position = "Tiền đạo";

    playerIds.push(id);
    playerPositions.push(position);
}

function printTeamRoster() {
    console.log(`Đội bóng hiện tại ( ${playerIds.length } cầu thủ):`);
    for(let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}.${playerIds}-${playerPositions[i]}`);
    }
}

function findPlayersByPosition(position) {
  let index = [];
  for (let i = 0; i < playerPositions.length; i++) {
    if (playerPositions[i] === position) {
      index.push(i);
    }
  }
  return index;
}

let countPosition = +prompt(
    "Nhập vị trí cầu thủ muốn đếm (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"
  );

let positionName = "";
if (countPosition === 1) positionName = "Thủ môn";
else if (countPosition === 2) positionName = "Hậu vệ";
else if (countPosition === 3) positionName = "Tiền vệ";
else if (countPosition === 4) positionName = "Tiền đạo";

printTeamRoster();

 let result = findPlayersByPosition(positionName);

 console.log(`Số cầu thủ ở vị trí ${positionName}: ${result.length}`);
 console.log(`Các chỉ số cầu thủ ở vị trí ${positionName}: ${resuult.join(",")}`);
