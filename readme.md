# notwification

desktop notifications for twitch streams

**twitch just added desktop notifications for people you follow, but this could still be useful if you dont want notifications for every single person you follow**

## how to

```bash
git clone https://github.com/enra4/notwification
cd notwification
npm install
```

then go over to <a href="https://splush.nikerino.com/">splush</a> and generate a key.
then go over to <a href="https://blog.twitch.tv/client-id-required-for-kraken-api-calls-afbb8e95f843">
whatever the fuck this is</a> to learn about how to make a client id. now put the splush key and the
twitch client id into settings.json, and then place the channels you want notifications from in the channels array.

finally you can

```bash
node app.js
```
