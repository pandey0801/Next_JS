const { default: mongoose } = require("mongoose");

const meetModal = new mongoose.Schema({
    name:String,
    // price:String

    title:String,
    image:String,
    address:String,
    description:String,
});

export const meet = mongoose.models.meet || mongoose.model("meets",meetModal);