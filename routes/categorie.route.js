var express = require("express");

var router = express.Router();

const Categorie = require("../models/categorie");

router.get("/", async (req, res) => {
  try {
    const cat = await Categorie.find({}, null, { sort: { _id: -1 } });

    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { nomcategorie, imagecategorie } = req.body;
  const newCategorie = new Categorie({
    nomcategorie: nomcategorie,
    imagecategorie: imagecategorie,
  });
  try {
    await newCategorie.save();
    res.status(200).json(newCategorie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:categorieId", async (req, res) => {});
router.put("/:categorieId", async (req, res) => {});
router.delete("/:categorieId", async (req, res) => {});

module.exports = router;
