const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let textValue = textarea.value;
  navigator.clipboard.writeText(textValue);
  copyBtn.innerText = "کپی شد!";
  copyBtn.style.background = "#ccc";

  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.background = "#eee";
  }, 2000);
});
