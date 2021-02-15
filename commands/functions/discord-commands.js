const fetch = require('node-fetch');
const interactions = require('discord-interactions');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const discord_api = 'https://discord.com/api/v8';
const BOT_PUBLIC_KEY = process.env.BOT_PUBLIC_KEY;
const GUILD_ID = `412087578498695171`;

const headers = {
  Authorization: `Bot ${DISCORD_BOT_TOKEN}`
};

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  try {
    const signature = event.headers['x-signature-ed25519'];
    const timestamp = event.headers['x-signature-timestamp'];
    const isValidRequest = interactions.verifyKey(
      event.body,
      signature,
      timestamp,
      BOT_PUBLIC_KEY
    );
    if (!isValidRequest) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Bad request signature' })
      };
    }
  } catch (e) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Bad request signature' })
    };
  }

  // return the ping (discord checking if service is active)
  if (body.type === 1) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: 1
      })
    };
  }

  // for reference
  const protectedRoles = [
    'Admin',
    'Advocate',
    'bot',
    'Server Booster',
    'The Collective',
    'Vortex',
    'Zapier'
  ];

  // list of allowed roles
  const allowedRoles = new Map([
    ['420948305464262659', 'Professional'],
    ['625449975869997089', 'Business Admin'],
    ['625450309556371467', 'BIM Specialist'],
    ['420948044909903872', 'Student'],
    ['421691951302049812', 'Interested'],
    ['420954780609937429', 'Architecture'],
    ['420954942375854080', 'Engineering'],
    ['625451030116565005', 'Structural'],
    ['625450766483849248', 'Electrical'],
    ['625450815150358539', 'Mechanical'],
    ['420954975083036682', 'Construction']
  ]);

  const requestedRole = body.data.options[0].value;
  const userID = body.member.user.id;

  if (allowedRoles.get(requestedRole)) {
    try {
      const roleURL = `${discord_api}/guilds/${GUILD_ID}/members/${userID}/roles/${requestedRole}`;
      const response = await fetch(roleURL, {
        method: 'put',
        headers
      });
    } catch (e) {
      console.error(e);
      return {
        statusCode: 200,
        body: JSON.stringify({
          type: 4,
          data: {
            tts: false,
            content: `Error setting permissions.`,
            embeds: [],
            allowed_mentions: []
          }
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        type: 4,
        data: {
          tts: false,
          content: `The ${allowedRoles.get(
            requestedRole
          )} role has been added for you.`,
          embeds: [],
          allowed_mentions: []
        }
      })
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: 4,
        data: {
          tts: false,
          content: `The ${allowedRoles.get(
            requestedRole
          )} role is not an allowed option to self assign.`,
          embeds: [],
          allowed_mentions: []
        }
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      type: 4,
      data: {
        tts: false,
        content: 'I am not certain what else to say...',
        embeds: [],
        allowed_mentions: []
      }
    })
  };
};
