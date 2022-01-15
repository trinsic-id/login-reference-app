import { Credentials, CredentialsServiceClient } from '@trinsic/service-clients';

const auth = new Credentials(process.env.TRINSIC_API_KEY);

export const trinsic = new CredentialsServiceClient(auth, { noRetryPolicy: true });
