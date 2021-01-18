require('module-alias/register')

// const Discord = require('discord.js')
// const client = new Discord.Client()
const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const Commando = require('discord.js-commando')
const loadFeatures = require('@root/features/load-features')

const modLogs = require('@features/mod-logs')

const client = new Commando.CommandoClient({
  owner: '650709300657782805',
  commandPrefix: 'r.',
})

client.on('ready', async () => {
  console.log('The client is ready!')

  client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

  //modLogs(client)
})

client.login(process.env.TOKEN)
