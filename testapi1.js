router.get("/user", (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        console.error(err);
        res.status(400).json({ message: "회원 목록 조회 실패" });
      } else {
        res.json(users);
      }
    });
  });
  