const student = [
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
  { name: "XXX", process: "xxx", email: "xxx@jejunu.com" },
];

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const professor = (req, res) =>
  res.render("professor", { pageTitle: "Professor" });

export const research = (req, res) =>
  res.render("research", { pageTitle: "Research area" });

export const members = (req, res) =>
  res.render("members", { pageTitle: "Members", members: student });

export const publications = (req, res) =>
  res.render("publications", { pageTitle: "Publications" });

export const contact = (req, res) =>
  res.render("contact", { pageTitle: "Contact" });
