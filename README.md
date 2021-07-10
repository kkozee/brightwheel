# Getting Started
1) Clone repo
2) Ask @kkozee for a copy of the `.env` file and add it to your root directory
3) Run `npm install`
4) Run `npm run`
5) Send POST request to `http://localhost:3000/email` using body 

```{
    "to": "kkozee@gmail.com",
    "to_name": "Kevin Kozee",
    "from": "noreply@mybrightwheel.com",
    "from_name": "Brightwheel",
    "subject": "Your Weekly Report",
    "body": "<h1>Weekly Report</h1><p>You saved 10 hours this week!</p>"
  }```
