// Copy this file to "config.js" (same folder as phasmochat.html) and edit the values you want to change.
// Delete any line you don't care about and it falls back to the default in phasmochat.html.
// When you update, replace only phasmochat.html (and config.example.js) and keep your config.js.
// Advanced options (testIntervalMs) can be added here too, see the README.
const USER_CONFIG = {
  channel: "yourchannel",          // Twitch channel name (lowercase)
  fontSize: 28,                    // px
  maxLines: 12,                    // lines kept on screen
  fadeSeconds: 30,                 // seconds before a line flickers out (0 = never fade)
  ignoredUsers: ["nightbot", "streamelements", "streamlabs", "spotchbot"],  // lowercase usernames to hide
  gmTag: "<Host>",                 // tag before the broadcaster's name ("" = none)
  modTag: "<Mod>",                 // tag before moderators' names ("" = none)
  chatPrefix: "[Radio] ",          // prefix on regular chat lines
  modPrefix: "[Truck] ",           // prefix on moderator lines
  joinMessage: "{name} has entered the investigation.",  // amber line the first time someone chats ("" = none)
  subMessage: "{name} has signed a contract.",  // amber line for a new subscriber or gift recipient ("" = none)
  colors: {
    chat: "#D8F5D0",               // chat text
    modText: "#7CE88A",            // moderator text
    system: "#FFB347",             // join/sub lines
    gm: "#FF3B30",                 // the broadcaster's tag (gmTag)
    mod: "#7CE88A",                // the moderators' tag (modTag)
    streamerName: "#FF6F91",       // the broadcaster's name
    modName: "#E53935",            // moderators' names
    userName: "#5DADEC",           // everyone else's name
  },
};
