router.get("/user/:userId", (req, res) => {
    const { userId } = req.params;
    const [user] = userDb.filter((user) => user.ID === userId);
    if (!user) {
      res.status(404).json({ message: "회원을 찾을 수 없습니다." });
    } else {
      res.json(user);
    }
  });
  