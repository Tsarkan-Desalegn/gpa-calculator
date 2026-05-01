const AddCourse = document.querySelector(".addCourse-button");
const displayContainer = document.querySelector(".displayContainer");

AddCourse.addEventListener("click", () => {
  const CourseDiv = document.createElement("div");
  CourseDiv.classList.add("course-row");

  CourseDiv.innerHTML = `
    <div>
      <input class="courseInput" placeholder="Course name">
      <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="1.6rem"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
    </div>
    <select>
      <option value="A+">A+</option>
      <option value="A">A</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="B-">B-</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="C-">C-</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
    <input type="number" placeholder="3">
  `;

  CourseDiv.style.display = "flex";
  CourseDiv.style.justifyContent = "space-around";
  CourseDiv.style.margin = "10px 0";

const deleteBtn = CourseDiv.querySelector(".delete");
deleteBtn.addEventListener("click", ()=>{
    CourseDiv.remove();
})

  displayContainer.appendChild(CourseDiv);
});