import CreateModel from "../models/create.model.js";

export const authenticateApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({ error: "API key missing" });
    }

    const user = await CreateModel.findOne({
      generatedApiKey: apiKey,
    });

    if (!user) {
      return res.status(403).json({ error: "Invalid API key" });
    }

    req.user = user; // attach user
    next();
  } catch (err) {
    res.status(500).json({ error: "Auth error" });
  }
};
