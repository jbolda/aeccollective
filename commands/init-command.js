const fetch = require('node-fetch');

const run = async () => {
  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

  const discord_api = 'https://discord.com/api/v8';
  const APPLICATION_ID = `571738837248901141`;
  const GUILD_ID = `412087578498695171`;

  const url = `${discord_api}/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`;

  const contents = [
    {
      name: 'role',
      description:
        'Ask the the bot to assign me a role. You may run this again to add another.',
      options: [
        {
          name: 'role-to-set-me-as',
          description:
            'Choose your role. You may run this again to add another.',
          type: 3, // 3 is string
          required: true,
          choices: [
            {
              name: 'Student',
              value: 'Student'
            },
            {
              name: 'Professional',
              value: 'Professional'
            },
            {
              name: 'Business Administration',
              value: 'Business Administration'
            },
            {
              name: 'BIM Specialist',
              value: 'BIM Specialist'
            },
            {
              name: 'Interested',
              value: 'Interested'
            }
          ]
        }
      ]
    },
    {
      name: 'field',
      description:
        'Ask the bot to assign a field the represents your background. You may run this again to add another.',
      options: [
        {
          name: 'field-to-set-me-as',
          description:
            'Choose your role. You may run this again to add another.',
          type: 3, // 3 is string
          required: true,
          choices: [
            {
              name: 'Architecture',
              value: 'Architecture'
            },
            {
              name: 'Engineering',
              value: 'Engineering'
            },
            {
              name: 'Structural',
              value: 'Structural'
            },
            {
              name: 'Electrical',
              value: 'Electrical'
            },
            {
              name: 'Mechanical',
              value: 'Mechanical'
            },
            {
              name: 'Construction',
              value: 'Construction'
            }
          ]
        }
      ]
    },
    {
      name: 'remove',
      description: 'Remove a role or a field.',
      options: [
        {
          name: 'role',
          description: 'Ask the bot to remove a previously requested role.',
          type: 1, // 1 is type SUB_COMMAND
          options: [
            {
              name: 'role-to-set-me-as',
              description: 'Remove a role that you previously requested.',
              type: 3, // 3 is string
              required: true,
              choices: [
                {
                  name: 'Student',
                  value: 'Student'
                },
                {
                  name: 'Professional',
                  value: 'Professional'
                },
                {
                  name: 'Business Administration',
                  value: 'Business Administration'
                },
                {
                  name: 'BIM Specialist',
                  value: 'BIM Specialist'
                },
                {
                  name: 'Interested',
                  value: 'Interested'
                }
              ]
            }
          ]
        },
        {
          name: 'field',
          description: 'Ask the bot to remove a previously requested field.',
          type: 1, // 1 is type SUB_COMMAND
          options: [
            {
              name: 'role-to-set-me-as',
              description: 'Remove a field that you previously assigned.',
              type: 3, // 3 is string
              required: true,
              choices: [
                {
                  name: 'Architecture',
                  value: 'Architecture'
                },
                {
                  name: 'Engineering',
                  value: 'Engineering'
                },
                {
                  name: 'Structural',
                  value: 'Structural'
                },
                {
                  name: 'Electrical',
                  value: 'Electrical'
                },
                {
                  name: 'Mechanical',
                  value: 'Mechanical'
                },
                {
                  name: 'Construction',
                  value: 'Construction'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bot ${DISCORD_BOT_TOKEN}`
  };

  for (let bodyContent of contents) {
    const json = JSON.stringify(bodyContent);

    const response = await fetch(url, {
      method: 'post',
      body: json,
      headers
    });
    const data = await response.json();

    console.dir(data);
  }
};

run();
