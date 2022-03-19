import jwt from 'jsonwebtoken';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(400).json({ message: 'method not allowed' });
  }

  const auth = request.headers.authorization || '';
  const [,token] = auth.split(' ');

  const decoded = jwt.verify(token, 'secretkey');

  const user = {
    id: decoded.AccountID,
    name: decoded.Name,
    email: decoded.Email,
  };

  return response.status(200).json({ user });
}