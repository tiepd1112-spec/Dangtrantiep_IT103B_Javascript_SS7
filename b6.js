let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn"
];

const printTeamRoster = () => {
  console.log("DANH SÁCH ĐỘI BÓNG:");
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    let id = parts[0];
    let name = parts[1];
    let position = parts[2];
    console.log(`${i + 1}. ${id} | ${name} | ${position}`);
  }
};


function getShortestPlayerName() {
  let shortestName = "";
  let shortestLength = 0;

  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    let name = parts[1];

    if (i === 0) {
      shortestName = name;
      shortestLength = name.length;
    } else if (name.length < shortestLength) {
      shortestName = name;
      shortestLength = name.length;
    }
  }

  return shortestName;
}

function countPlayersWithPositionLengthGreaterThan(length) {
  let count = 0;

  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    let position = parts[2];

    if (position.length > length) {
      count++;
    }
  }

  return count;
}

 printTeamRoster();

let shortestPlayer = getShortestPlayerName();
console.log(`Cầu thủ có tên ngắn nhất là: ${shortestPlayer}`);

let result = countPlayersWithPositionLengthGreaterThan(7);
console.log(`Số cầu thủ có vị trí dài hơn 7 ký tự là: ${result}`);

