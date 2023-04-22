const mySecret = process.env['TOKEN']
const { Client, version } = require('discord.js');
const { 
    serverID, 
    roleID, 
    interval,
    token
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ ${bot.user.tag} ] Rainbow ACTIVATED`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[Error] ServerID erreur: ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[Error] RoleID est incorrect, Server Name: ${guild.name}` 
    
    if(interval < 3500) console.log(`\n[!] Change l'interval 3500`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[Error] Je n'ai pas les permission pour le rôle, vérifier que je suis plus haut que le rôle!`));
    }, interval)
    
        bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: '/novaworld',
            type: 'LISTENING',
        }
    })
})

bot.login(token).catch(err => console.log(`Token is Invalid!`));
