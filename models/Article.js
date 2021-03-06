const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    title:{
        type: String,
        required: true,
        unique: true
    },

    link:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    image: {
        type: String,
        required: false
    },

    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
