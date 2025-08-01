// server.js or routes/leetcode.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/leetcode/:username", async (req, res) => {
  const { username } = req.params;

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          ranking
          userAvatar
          school
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query,
        variables: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data.data.matchedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch LeetCode data." });
  }
});

module.exports = router;
