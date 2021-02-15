const fetch = require('node-fetch');

const run = async () => {
  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

  const discord_api = 'https://discord.com/api/v8';
  const APPLICATION_ID = `571738837248901141`;
  const GUILD_ID = `412087578498695171`;

  const url = `${discord_api}/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`;

  const bodyContent = {
    name: 'role',
    description:
      'Ask the the bot to assign me a role. You may run this again to add another.',
    options: [
      {
        name: 'role-to-set-me-as',
        description: 'Choose your role. You may run this again to add another.',
        type: 8, // 8 is type ROLE
        required: true
      }
    ]
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bot ${DISCORD_BOT_TOKEN}`
  };

  const json = JSON.stringify(bodyContent);

  const response = await fetch(url, {
    method: 'post',
    body: json,
    headers
  });
  const data = await response.json();

  console.dir(data);
};

run();
