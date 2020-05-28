const MusicBot = require('./server.js');

const musicBot = new MusicBot({
  discordToken: 'NzEzMDA0NzU2ODg4NDUzMTQx.XscDfA.v5vm7iQhmYTmCEUQtNkLpxULJTk',
  googleKey: 'AIzaSyDFtggv11EsnI8uUcKzF3p4P_zO0YzzCXQ'
});

musicBot.start();

//Do not update this to Discord.JS v0.12.1 or your bot will crash