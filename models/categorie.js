
const mongoose = require('mongoose');

const categorieSchema = mongoose.Schema({
    nomcategorie : {type: String, required: true,unique: true},
    ImageCategorie: {type: String, required: false}

})

module.exports= mongoose.model('categorie', categorieSchema);
// Path: routes/categorie.js