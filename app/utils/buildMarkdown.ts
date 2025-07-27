import { ReadmeStore } from "../store/useReadmeStore";

const techColors: Record<string, string> = {
  javascript: "F7DF1E",
  typescript: "3178C6",
  react: "61DAFB",
  nextjs: "000000",
  nodejs: "339933",
  express: "000000",
  mongodb: "47A248",
  mysql: "4479A1",
  postgresql: "336791",
  python: "3776AB",
  java: "007396",
  c: "00599C",
  cpp: "00599C",
  html: "E34F26",
  css: "1572B6",
  tailwindcss: "06B6D4",
  bootstrap: "7952B3",
  git: "F05032",
  github: "181717",
};

export function generateMarkdown(data: ReadmeStore): string {
  let md = `# 👋 Hi, I'm ${data.username || "a developer"}\n\n`;

  // Title
  if (data.title) md += `## ${data.title}\n\n`;

  // Work
  if (data.currentlyWorking)
    md += `🔭 I’m currently working at **${data.currentlyWorking}**\n\n`;

  // Learning
  if (data.currentlyLearning)
    md += `🌱 I’m currently learning **${data.currentlyLearning}**\n\n`;

  // Ask me about
  if (data.askMeAbout) md += `💬 Ask me about **${data.askMeAbout}**\n\n`;

  // Contact
  if (data.reachMeAt) md += `📫 Reach me at **${data.reachMeAt}**\n\n`;

  // Tech Stack
  if (data.selectedTech.length > 0) {
    md += `## 🛠️ Tech Stack\n\n`;

    data.selectedTech.forEach((tech) => {
      const slug = tech.toLowerCase().replace(/\s+/g, "");
      const color = techColors[slug] || "blue";
      md += `![${tech}](https://img.shields.io/badge/${encodeURIComponent(
        tech
      )}-${color}?style=for-the-badge&logo=${slug}&logoColor=white) `;
    });

    md += `\n\n`;
  }

  // Social Links
  if (data.socialLinks.length > 0) {
    md += `## 🌐 Socials\n\n`;

    data.socialLinks.forEach(({ name, value }) => {
      if (value && value.trim() !== "") {
        md += `- [${name}](${value})\n`;
      }
    });

    md += `\n`;
  }

  // GitHub Trophies
  if (data.showTrophies && data.username) {
    md += `## 🏆 GitHub Trophies\n\n`;
    md += `![Trophies](https://github-profile-trophy.vercel.app/?username=${data.username}&theme=radical)\n\n`;
  }

  // Contribution Graph
  if (data.showContributions && data.username) {
    md += `## 📈 Contribution Graph\n\n`;
    md += `![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=${data.username}&theme=github-compact
)\n\n`;
  }

  if (data.showTechContributions && data.username) {
    md += `## 🛠️ Tech Contributions\n\n`;
    md += `![Tech Contributions](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username}&layout=compact)\n\n`;
  }

  return md;
}
