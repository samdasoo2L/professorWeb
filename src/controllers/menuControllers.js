const student = [{ name: "JI HYE KIM", phone: "010-8641-7076", pic: "p2.jpg" }];

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const professor = (req, res) =>
  res.render("professor", { pageTitle: "Professor" });

export const members = (req, res) =>
  res.render("members", { pageTitle: "Members", members: student });

export const publications = (req, res) =>
  res.render("publications", { pageTitle: "Publications" });

export const contact = (req, res) =>
  res.render("contact", { pageTitle: "Contact" });
