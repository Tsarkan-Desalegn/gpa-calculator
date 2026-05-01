# 📊 GPA Calculator

A simple web-based GPA Calculator that allows students to input their courses, grades, and credits to compute their **Final GPA**, along with **Total Credits** and **Total Points**.

---

## 🚀 Features
- Add multiple courses dynamically
- Select grade from a predefined scale (A+ → F)
- Enter course credits
- Delete courses easily
- Calculate:
  - Final GPA
  - Total Credits (excluding F grades)
  - Total Points
- Export results to PDF (button included for future extension)
- Responsive and clean UI

---

## 🛠️ Technologies Used
- **HTML5** – structure
- **CSS3** – styling
- **JavaScript (ES6)** – functionality

---

## 📂 Project Structure
├── index.html      # Main HTML file
├── index.css       # Stylesheet
└── index.js        # JavaScript logic

---

## ⚙️ How It Works
1. Enter **Student Name** and **Student ID**.
2. Click **+Add Course** to add a new row.
3. Fill in:
   - Course name
   - Grade (A+ → F)
   - Credit hours
4. Click **Calculate GPA** to compute:
   - Final GPA
   - Total Credits
   - Total Points
5. Use **Export PDF** (future feature) to save results.

---

## 📐 Grade Scale
| Grade | Range   | Points |
|-------|---------|--------|
| A+    | 100–90  | 4.0    |
| A     | 89–85   | 4.0    |
| A-    | 84–80   | 3.75   |
| B+    | 79–75   | 3.5    |
| B     | 74–70   | 3.0    |
| B-    | 69–65   | 2.75   |
| C+    | 64–60   | 2.5    |
| C     | 59–50   | 2.0    |
| C-    | 49–45   | 1.75   |
| D     | 44–40   | 1.0    |
| F     | 39–0    | 0.0 (excluded from credits) |

---