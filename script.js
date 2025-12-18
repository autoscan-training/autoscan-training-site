// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Close menu when clicking a link
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("show"));
  });
}

// Course picker -> select + scroll to form
const chips = document.querySelectorAll(".chip");
const selectedCourseEl = document.getElementById("selectedCourse");
const regForm = document.getElementById("regForm");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    // active style
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    // show selected
    const course = chip.dataset.course || "—";
    if (selectedCourseEl) selectedCourseEl.textContent = course;

    // smooth scroll to form
    if (regForm) {
      regForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
