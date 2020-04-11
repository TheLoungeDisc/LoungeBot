exports.msgDelete = async (bot, messageDelete, logCH, darkblue, date, time, timeLogs, Discord) => {

    var body = ""
    if (!messageDelete.content) {

        body = "`null`"

    } else {

        body = `${messageDelete.content}`

    }

    const embed = new Discord.RichEmbed()
            .setColor(darkblue)
            .setAuthor(`${messageDelete.author.username}`, `${messageDelete.author.avatarURL}`)
            .setTitle("Message Deleted:")
            .setDescription(`Message sent by ${messageDelete.author} has been deleted.`)
            .addField("Message content: ", (body))
            .addField("Channel:", `#${messageDelete.channel.name}`)
            .addField("Date & Time:", `${date} @ ${time}`)
    bot.channels.get(logCH).send(embed)
}