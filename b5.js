let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn"
];

const getAllPositions = () => {
  let positions = [];

  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    let isExist = false;

    for (let j = 0; j < positions.length; j++) {
      if (positions[j] === position) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      positions.push(position);
    }
  }

  return positions;
};

const findPlayersWithLongestName = () => {
  let longestName = "";
  let maxLength = 0;

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];

    if (name.length > maxLength) {
      maxLength = name.length;
      longestName = name;
    }
  }

  return longestName;
};

const countPlayersStartingWithLetter = (letter) => {
  let count = 0;
  letter = letter.toLowerCase();

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];
    let firstChar = name[0].toLowerCase();

    if (firstChar === letter) {
      count++;
    }
  }

  return count;
};

let positions = getAllPositions();
console.log(`Các vị trí trong đội: ${positions.join(", ")}`);

let longestName = findPlayersWithLongestName();
console.log(`Cầu thủ có tên dài nhất: ${longestName}`);

let letter = "N";
let total = countPlayersStartingWithLetter(letter);
console.log(
  `Số cầu thủ có tên bắt đầu bằng chữ "${letter}": ${total}`
);
