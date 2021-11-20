const fetch = require('node-fetch');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const discord_api = 'https://discord.com/api/v8';
const APPLICATION_ID =
  process.env.DISCORD_APPLICATION_ID || `571738837248901141`;
const GUILD_ID = `412087578498695171`;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bot ${DISCORD_BOT_TOKEN}`
};

const contents = [
  {
    name: 'role',
    description:
      'Ask the the bot to assign me a role. You may run this again to add another.',
    options: [
      {
        name: 'role-to-set-me-as',
        description: 'Choose your role. You may run this again to add another.',
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
    type: 1,
    description:
      'Ask the bot to assign a field the represents your background. You may run this again to add another.',
    options: [
      {
        name: 'field-to-set-me-as',
        description: 'Choose your role. You may run this again to add another.',
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
          },
          {
            name: 'Geotechnical',
            value: 'Geotechnical'
          }
        ]
      }
    ]
  },
  {
    name: 'remove',
    type: 1,
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
              },
              {
                name: 'Geotechnical',
                value: 'Geotechnical'
              }
            ]
          }
        ]
      }
    ]
  }
];

const add_commands = async () => {
  const url = `${discord_api}/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`;
  console.log(`posting to ${url}`);

  for (let bodyContent of contents) {
    const json = JSON.stringify(bodyContent);

    const response = await fetch(url, {
      method: 'post',
      body: json,
      headers
    });
    const data = await response.json();

    console.dir(data);
    if (data.errors) console.dir(data.errors);
  }
};

const verify_commands = async () => {
  const url = `${discord_api}/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`;

  const response = await fetch(url, {
    method: 'get',
    headers
  });
  const data = await response.json();

  data.forEach((d) => {
    console.log(d);
    d.options.forEach((option, index) => {
      if (option.choices) {
        console.log(`option ${index + 1} choices`, option.choices);
      } else if (option.options) {
        console.log(`option ${index + 1} choices`, option.options[0].choices);
      }
    });
  });

  return data;
};

const delete_commands = async () => {
  const commands = await verify_commands();
  for (let command of commands) {
    const url = `${discord_api}/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands/${command.id}`;

    const response = await fetch(url, {
      method: 'delete',
      body: {},
      headers
    });

    console.log(command.name, command.id, response.status);
  }
};

if (!process.argv[2] || process.argv[2] === 'verify') {
  verify_commands();
} else if (process.argv[2] === 'add') {
  add_commands();
} else if (process.argv[2] === 'delete') {
  delete_commands();
} else {
  console.log(`${process.argv[2]} is an invalid arg`);
}
