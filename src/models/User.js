const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    discordId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    avatar: {
        type: String, // Cambiado a tipo String si almacena una URL o una cadena para el avatar.
        required: true,
    },
}, {
    timestamps: true, // La opción timestamps es un objeto dentro del segundo argumento.
});

module.exports = model("User", userSchema);
