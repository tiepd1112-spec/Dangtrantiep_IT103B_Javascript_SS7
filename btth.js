let players = [];
let goals = [];

function addPlayer(name, goal) {
  players.push(name);
  goals.push(goal);
  alert(`Đã thêm ${name} thành công.`);
}

function showSquad() {
  if (players.length === 0) {
    alert("Đội bóng chưa có cầu thủ nào.");
    return;
  }

  console.clear();
  for (let i = 0; i < players.length; i++) {
    console.log(`${i + 1}. ${players[i]} - ${goals[i]} bàn`);
  }
}

const getTotalGoals = function () {
  let total = 0;
  for (let i = 0; i < goals.length; i++) {
    total += goals[i];
  }
  return total;
};

function findMostGoals(goalsArray) {
  if (goalsArray.length === 0) {
    return 0;
  }

  let max = goalsArray[0];
  for (let i = 1; i < goalsArray.length; i++) {
    if (goalsArray[i] > max) {
      max = goalsArray[i];
    }
  }
  return max;
}

let choice;

do {
  choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát
Nhập lựa chọn:`
  );

  switch (choice) {
    case "1":
      let name = prompt("Nhập tên cầu thủ:");
      let goal = parseInt(prompt("Nhập số bàn thắng:"));

      if (name === "" || isNaN(goal)) {
        alert("Dữ liệu không hợp lệ!");
      } else {
        addPlayer(name, goal);
      }
      break;

    case "2":
      showSquad();
      break;

    case "3":
      let totalGoals = getTotalGoals();
      alert(`Tổng số bàn thắng của đội là: ${totalGoals} bàn`);
      break;

    case "4":
      let maxGoals = findMostGoals(goals);

      if (maxGoals === 0) {
        alert("Chưa có dữ liệu cầu thủ.");
      } else {
        alert(`Vua phá lưới hiện tại ghi được: ${maxGoals} bàn`);
      }
      break;

    case "0":
      alert("Thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== "0");
