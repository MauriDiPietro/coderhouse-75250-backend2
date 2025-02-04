export const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(403).json({ msg: "Unauthorized" });
};
