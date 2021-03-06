const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Yalnış Biçim Doğrusu `tr!küfürengel aç` ')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik').then(i => {
      message.channel.send('✅ Küfur Engel başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanların küfürü engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send('✅ Küfür Engel başarıyla kapatıldı! Artık herkes küfür yazabilir.')
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 0,
  kategori: "Ayarlar"
};

exports.help = {
  name: 'küfürengel',
  description: '[Admin Komutu]',
  usage: 'küfürengel aç/kapa'
};