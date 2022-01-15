import { v4 as uuid } from 'uuid';

import { trinsic } from '../../services/trinsic';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(400).json({ message: 'method not allowed' });
  }

  const { name, email } = request.body;

  const parameters = {
    definitionId: process.env.TRINSIC_CREDENTIAL_ID,
    automaticIssue: true,
    credentialValues: {
      'AccountID': uuid(),
      'Name': name,
      'Email': email,
    },
  };

  const { offerData, offerUrl } = await trinsic.createCredential(parameters);

  response.status(200).json({ offerData, offerUrl })
}
