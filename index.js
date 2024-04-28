const Discord = require('discord.js');
const { token, server, role, interval } = require('./config.json');
const client = new Discord.Client({
    intents: 3276799
});
client.login(token);
client.on('ready', () => {
    try{
    console.log(`[!] — Logged in as ${client.user.tag} (${client.user.id})`);

    const guild = client.guilds.cache.get(server);
    if(!guild) return console.log('[!] — Please configure a valid server Id.');

    const roleuhq = guild.roles.cache.get(role);
    if(!roleuhq) return console.log('[!] — Please configure a valid role Id.');

    setInterval( async () => {
        await roleuhq.edit({ color: 'Random'}).catch(e => { console.log(`[!] — Error editing role color ${roleuhq.name} (${roleuhq.id}):`, e.message); });
    }, interval);
    } catch {}
});