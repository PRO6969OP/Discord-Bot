const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: 'Changes Slowmode',
    
    execute(client, message, args) {
        

        const embed = new Discord.MessageEmbed()

       if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        
           embed.setDescription('<a:opa5:797429643245387797> You cant use this')
           embed.setColor('e70619')
          
           return message.channel.send(embed)
       } 
       
    
        if(!args[1]) {
            
            embed.setDescription('<a:opa5:797429643245387797> You need to provide how long to set slowmode')
            embed.setColor('e70619')
            
            return message.channel.send(embed)
        } 
        

        

        if(isNaN(parseInt(args[1]))) {
            
            embed.setDescription('<a:opa5:797429643245387797> That Is Not A Number')
            embed.setColor('e70619')
            
            return message.channel.send(embed)
        } 
       

        message.channel.setRateLimitPerUser(args[1])

            
            embed.setDescription(`<a:tick:805054223103426560> __The slowmode of the channel has been set to__ ${args[1]}`)
            embed.setColor('1ace4d')
           

            return message.channel.send(embed)


       
    }
 
}   
