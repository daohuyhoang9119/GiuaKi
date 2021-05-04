const btnAdd = document.querySelector(".btn-add");
const btnReset = document.querySelector(".btn-reset");

//get all input value

const nameJob = document.querySelector("#name-job");
const nguoiPhuTrach = document.querySelector("#nguoiphutrach");
const noiNhanHang = document.querySelector("#from");
const noiGiaoHang = document.querySelector("#to");
const startTime = document.querySelector("#start");
const endTime = document.querySelector("#end");
const textAreaValue = document.querySelector("textarea");
//task list
const taskList = document.querySelector(".task-list");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const html = `
    <li class="tast-item">
      <a href="#" class="popup">${nameJob.value}</a>
      <div class="box">
        <div class="box-content">
          <div class="box-heading">
                <h3>${nameJob.value}</h3>
                <span class="btn-close">X</span>
          </div>    
          <p>Người phụ trách: ${nguoiPhuTrach.value}</p>
          <div class="task-place">
            <span>Nơi nhận hàng: ${noiNhanHang.value}</span>
            <span>Nơi giao hàng: ${noiGiaoHang.value}</span>
          </div>
          <div class="task-time">
            <span>Ngày bắt đầu: ${startTime.value}</span>
            <span>Ngày kết thúc: ${endTime.value}</span>
          </div>
          <p>Chi tiết</p>
          <p>${textAreaValue.value}</p>
        </div>
      </div>
      <span>Người phụ trách: ${nguoiPhuTrach.value}</span>
      <span>Nơi nhận: ${noiNhanHang.value}</span>
      <span>Ngày bắt đầu: ${startTime.value} </span>
    </li>
    `;
  taskList.insertAdjacentHTML("beforeend", html);

  let box = document.querySelectorAll(".box");
  console.log(box);
  let boxContent = document.querySelectorAll(".box-content");
  console.log(boxContent);
  let btnClose = document.querySelector(".btn-close");
  console.log(btnClose);

  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup, i) => {
    popup.addEventListener("click", (e) => {
      e.preventDefault();
      box[i].style.display = "block";
      console.log(box[i]);

      btnClose.addEventListener("click", () => {
        box[i].style.display = "none";
        console.log(box[i]);
      });
    });

    // //click o ngoai thi tat cai popup do
    // window.onclick = function (event) {
    //   if (event.target == box) {
    //     box[i].style.display = "none";
    //     console.log(box[i]);
    //     s;
    //   }
    // };
  });
});
