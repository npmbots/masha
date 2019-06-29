//const { RichEmbed } = require("discord.js")


exports.run = async  (client, message, args) => {

class Util {
    constructor() {

        /**
         * @param {*} title  title for embed
         * @param {*} color color for embed (int, RANDOM, hex code)
         * @param {*} description description for embeds
         */
        exports.embeds = function embeds(title, color, description, footer) {
            if (!title || typeof title !== "string" || !color || !description || typeof description !== "string") throw "Invalid Parameter"
            let embed = new client.ErisEmber()
            .setTitle(title)
            .setColor(color)
            .setDescription(description)
            .setFooter(footer)
            return embed;
        
        };
    };
};

module.exports = Util;
  
}