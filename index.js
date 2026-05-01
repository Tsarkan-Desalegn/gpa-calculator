const AddCourse = document.querySelector(".addCourse-button");
const displayContainer = document.querySelector(".displayContainer");
const finalGpa = document.querySelector(".final-GPA");
const calculateBtn = document.querySelector(".calculate-GPA-button");
const totalCreditPara =document.querySelector("#totalCreditPara");
const totalPointPara =document.querySelector("#totalPointPara");


AddCourse.addEventListener("click", () => {
  const CourseDiv = document.createElement("div");
  CourseDiv.classList.add("course-row");

  CourseDiv.innerHTML = `
    <div>
      <input class="courseInput" placeholder="Course name">
      <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="1.6rem"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
    </div>
    <select class="select">
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
    <input class= "credit" type="number" placeholder="3">
  `;

 CourseDiv.style.display = "flex";
  CourseDiv.style.flexWrap = "wrap";         
  CourseDiv.style.justifyContent = "space-between";
  CourseDiv.style.alignItems = "center";
  CourseDiv.style.gap = "1rem";
  CourseDiv.style.margin = "10px 0";

  
const deleteBtn = CourseDiv.querySelector(".delete");
deleteBtn.addEventListener("click", ()=>{
    CourseDiv.remove();
});

  displayContainer.appendChild(CourseDiv);
});



const gradePoint = {
  "A+": 4.0,
  "A": 4.0,
  "A-": 3.75,
  "B+": 3.5,
  "B": 3.0,
  "B-": 2.75,
  "C+": 2.5,
  "C": 2.0,
  "C-": 1.75,
  "D": 1.0,
  "F": 0.0
};

calculateBtn.addEventListener("click", () => {
  const grades = document.querySelectorAll(".select");
  const credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach((Grade, i) => {
    const gradeValue = Grade.value;
    const creditValue = parseFloat(credits[i].value) || 0;

    const points = gradePoint[gradeValue] || 0;
    totalPoints += points * creditValue;
   if(gradeValue !=="F"){
    totalCredits +=creditValue;
   }
  });
let gpa;
if(totalCredits>0){
    gpa = (totalPoints/totalCredits);
}
else{
    gpa=0;
}
  finalGpa.textContent = `Final GPA: ${gpa.toFixed(2)}`;
  totalCreditPara.textContent = `Total Credits: ${totalCredits}`;
  totalPointPara.textContent = `Total Points: ${totalPoints.toFixed(2)}`;
  
});

