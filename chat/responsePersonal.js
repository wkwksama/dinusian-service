const bot = require('../lib/telegramBot');

module.exports = () => {
  const trigger = 'Pengumuman Akademik';

  bot.on('message', (msg) => {
    console.log('>> chat telegram dari', msg.chat.username, ':', msg.text);

    if (msg.text.toString() === trigger) {
      return bot.sendMessage(msg.chat.id, 'ke channelku aja @dinusian');
    }

    bot.sendMessage(msg.chat.id, 'Hai, mau lihat pengumuman?', {
      reply_markup: {
        keyboard: [[trigger]]
      }
    });
  });
};
