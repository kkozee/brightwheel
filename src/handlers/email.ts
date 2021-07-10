import axios from 'axios';
import { Request, Response } from 'express';
import { convert } from 'html-to-text';
import { getEmailProviderData } from '../utils/email';

export default async (req: Request, res: Response) => {
  req.body.body = convert(req.body.body, {
    uppercaseHeadings: false
  });

  const { uri, apiKey, body } = getEmailProviderData(req.body);

  try {
    const response = await axios.post(uri, body, { 
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
}