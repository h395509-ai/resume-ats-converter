module.exports = function atsFormatter(text) {
  let cleanText = text.replace(/\t/g, " ")
                      .replace(/[^a-zA-Z0-9\s.,]/g, "");

  return `
  ============================
  ATS-FRIENDLY RESUME
  ============================

  CONTACT INFO:
  [Your Name]
  [Email] | [Phone]

  EDUCATION:
  ${extractSection(cleanText, "education")}

  EXPERIENCE:
  ${extractSection(cleanText, "experience")}

  SKILLS:
  ${extractSection(cleanText, "skills")}
  `;
};

function extractSection(text, keyword) {
  const regex = new RegExp(keyword, "i");
  return regex.test(text) ? "Extracted " + keyword + " section" : "Not found";
}
