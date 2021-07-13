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

# Tools Used
This implementation uses Typescript and Express. These tools were primarily selected due to time constraints and developer familiarity. Other key libarires include Axios for HTTP requests, Joi for schema validation and Dotenv for environmental variable usage (to keep API keys out of Git). These are all very popular NPM packages that are well maintained and tested.

# Tradeoffs
Given more time, I would have made design and technical decisions with the help of my team. I think for this type of service (sending emails), a good implementation would be serverless using an API gateway and cloud functions to accept email requests and queue them as needed; then using a cloud based chron job to run through the queue throughout each day. This would solve for potential scaling issues since the cloud function would auto scale from a server perspective and the queue and chron job would allow us to rate limit the number of email requests sent. We could even implement a fallback/retry when one third party fails where we auto send to the other third party without changing anything about the environment.
