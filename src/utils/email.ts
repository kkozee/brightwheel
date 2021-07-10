enum EmailProviderURI {
  spendgrid='https://bw-interviews.herokuapp.com/spendgrid/send_email',
  snailgun='https://bw-interviews.herokuapp.com/snailgun/emails',
}

type BrightwheelEmail = {
  to: string,
  to_name: string
  from: string
  from_name: string
  subject: string
  body: string
}

type SpendgridEmail = {
  sender: string
  recipient: string
  subject: string
  body: string
}

type SnailgunEmail = {
  from_email: string
  from_name: string
  to_email: string
  to_name: string
  subject: string
  body: string
}

export type EmailProvider = {
  uri: EmailProviderURI
  apiKey: string
  body: SpendgridEmail | SnailgunEmail
}

export const getEmailProviderData = ({
  from_name, 
  from, 
  to_name, 
  to, 
  subject, 
  body
}: BrightwheelEmail): EmailProvider => {
  switch (process.env.EMAIL_SERVICE_PROVIDER) {
    case 'spendgrid':
      return {
        uri: EmailProviderURI.spendgrid,
        apiKey: process.env.SPENDGRID_API_KEY,
        body: {
          sender: `${from_name} <${from}>`,
          recipient: `${to_name} <${to}>`,
          subject,
          body,
        }
      };
    case 'snailgun':
      return {
        uri: EmailProviderURI.snailgun,
        apiKey: process.env.SNAILGUN_API_KEY,
        body: {
          from_email: from,
          from_name,
          to_email: to,
          to_name,
          subject,
          body
        },
      };
    default:
      return {
        uri: EmailProviderURI.spendgrid,
        apiKey: process.env.SPENDGRID_API_KEY,
        body: {
          sender: `${from_name} <${from}>`,
          recipient: `${to_name} <${to}>`,
          subject,
          body,
        },
      }
  }
}
