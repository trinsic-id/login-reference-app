import jwt from 'jsonwebtoken';

import { trinsic } from '../../services/trinsic';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(400).json({ message: 'method not allowed' });
  }

  const { verificationId } = request.body;
  let verification = { state: 'Requested' };
  let timeout = false;
  setTimeout(() => timeout = true, 1000 * 60);

  while (!timeout && verification.state === 'Requested') {
    verification = await trinsic.getVerification(verificationId);
  }

  if (verification.state === 'Accepted') {
    const attributes = verification.proof['Passwordless Login'].attributes;
    const token = jwt.sign(attributes, 'secretkey');
    return response.status(200).json({ token, user: { ...attributes } });
  } else {
    return response.status(401).json({ message: 'verification failed' });
  }

}