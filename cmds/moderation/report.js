const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando')

module.exports = class AddCommand extends Commando.Command {
    constructor(client) {
        super(client, {
        name: 'report',
        group: 'moderation',
        memberName: 'rm01',
        description: 'reports a JartexNetwork rule breaker!',
        argsType: 'single',
        })
    }

    async run(message, args) {
        const embed = new MessageEmbed;
        embed.setTitle(`${message.author}'s report`);
        
        const filter = m => m.author === message.author;
        message.channel.send('Answer the questions, please send the message without adding the prefix').then(m => m.delete({timeout: 5000}))

        message.channel.send('**Reporter\'s Username?**').then(m => {
            m.delete({timeout:5000}) 
            message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(collected.content);
                    message.reply('registered')
                })
                .catch(collected => {
                    message.channel.send(`Looks like nobody answered this time.`);
                });
        });
    }
}
