const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription('You can react with emojis'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'I can react too!', fetchReply: true });
        message.react('😄');
    }
}