document.getElementById("uploadForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const file = document.getElementById("resumeFile").files[0];
  const formData = new FormData();
  formData.append("resumeFile", file);

  const response = await fetch("/convert", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  document.getElementById("result").innerText = "Converted Resume:\n\n" + data.atsResume;
});
