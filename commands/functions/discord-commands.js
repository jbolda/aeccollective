const fetch = require('node-fetch');
const { verifyKey } = require('discord-interactions');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const discord_api = 'https://discord.com/api/v8';
const BOT_PUBLIC_KEY = process.env.BOT_PUBLIC_KEY;
const GUILD_ID = `412087578498695171`;

const headers = {
  Authorization: `Bot ${DISCORD_BOT_TOKEN}`
};

exports.handler = async function (event, context) {
  if (!DISCORD_BOT_TOKEN) {
    console.error(`DISCORD_BOT_TOKEN is not defined.`);
  }
  if (!BOT_PUBLIC_KEY) {
    console.error(`BOT_PUBLIC_KEY is not defined.`);
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 401,
      body: JSON.stringify({
        type: 2,
        content: 'bad post'
      })
    };
  }

  const body = JSON.parse(event.body);
  const signature = event.headers['x-signature-ed25519'];
  const timestamp = event.headers['x-signature-timestamp'];
  const isValidRequest = verifyKey(
    event.body,
    signature,
    timestamp,
    BOT_PUBLIC_KEY
  );

  if (!isValidRequest) {
    return jsonify({
      code: 401,
      type: 2,
      data: { content: 'Bad request signature' }
    });
  }

  // return the ping (discord checking if service is active)
  if (body.type === 1) {
    return jsonify({ code: 200, type: 1, data: {} });
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
    ['Student', '420948044909903872'],
    ['Professional', '420948305464262659'],
    ['Business Administration', '625449975869997089'],
    ['BIM Specialist', '625450309556371467'],
    ['Interested', '421691951302049812'],
    ['Architecture', '420954780609937429'],
    ['Engineering', '420954942375854080'],
    ['Structural', '625451030116565005'],
    ['Electrical', '625450766483849248'],
    ['Mechanical', '625450815150358539'],
    ['Construction', '420954975083036682']
  ]);

  if (
    body.type === 2 &&
    (body.data.name === 'role' || body.data.name === 'field')
  ) {
    const requestedRole = body.data.options[0].value;
    const userID = body.member.user.id;

    if (allowedRoles.get(requestedRole)) {
      try {
        const roleURL = `${discord_api}/guilds/${GUILD_ID}/members/${userID}/roles/${allowedRoles.get(
          requestedRole
        )}`;
        const response = await fetch(roleURL, {
          method: 'put',
          headers
        });
      } catch (e) {
        console.error(e);
        return jsonify({
          code: 200,
          type: 4,
          data: {
            tts: false,
            content: `Error setting permissions.`,
            embeds: [],
            allowed_mentions: []
          }
        });
      }

      return jsonify({
        code: 200,
        type: 4,
        data: {
          tts: false,
          content: `${requestedRole} has been added to <@${body.member.user.id}>.`,
          embeds: [],
          allowed_mentions: { parse: ['users'] }
        }
      });
    } else {
      return jsonify({
        code: 200,
        type: 4,
        data: {
          tts: false,
          content: `Sorry, <@${body.member.user.id}>, ${requestedRole} is not an allowed option to self assign.`,
          embeds: [],
          allowed_mentions: { parse: ['users'] }
        }
      });
    }
  } else if (body.data.name === 'remove') {
    const roleToRemove = body.data.options[0].options[0].value;
    const userID = body.member.user.id;

    if (allowedRoles.get(roleToRemove)) {
      try {
        const roleURL = `${discord_api}/guilds/${GUILD_ID}/members/${userID}/roles/${allowedRoles.get(
          roleToRemove
        )}`;
        const response = await fetch(roleURL, {
          method: 'delete',
          headers
        });
      } catch (e) {
        console.error(e);
        return jsonify({
          code: 200,
          type: 4,
          data: {
            tts: false,
            content: `Error removing permissions.`,
            embeds: [],
            allowed_mentions: []
          }
        });
      }

      return jsonify({
        code: 200,
        type: 4,
        data: {
          tts: false,
          content: `${roleToRemove} has been removed from <@${body.member.user.id}>.`,
          embeds: [],
          allowed_mentions: { parse: ['users'] }
        }
      });
    } else {
      return jsonify({
        code: 200,
        type: 4,
        data: {
          tts: false,
          content: `Sorry, <@${body.member.user.id}>, ${roleToRemove} cannot be removed.`,
          embeds: [],
          allowed_mentions: { parse: ['users'] }
        }
      });
    }
  }

  return jsonify({
    code: 200,
    type: 4,
    data: {
      tts: false,
      content: 'I am not certain what to do with this...',
      embeds: [],
      allowed_mentions: []
    }
  });
};

const jsonify = ({ type, code, data }) => {
  console.log({ type, code, data });
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: type,
      data
    })
  };
};
