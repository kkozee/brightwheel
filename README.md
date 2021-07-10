# Getting Started
1) Clone repo
2) Run `cp .env-default .env`
3) Ask @kkozee for the api keys and add them to your `.env` file
4) Run `npm install`
5) Run `npm run`
6) Send POST request to `http://localhost:3000/email` using body:

```
{
    "to": "kkozee@gmail.com",
    "to_name": "Kevin Kozee",
    "from": "noreply@mybrightwheel.com",
    "from_name": "Brightwheel",
    "subject": "Your Weekly Report",
    "body": "<h1>Weekly Report</h1><p>You saved 10 hours this week!</p>"
}
```
