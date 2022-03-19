import axios from "axios";
import { parseCookies } from "nookies";

export function getAPI(context = undefined) {
  const { 'ssi.token': token } = parseCookies(context)

  const api = axios.create({
    baseURL: 'http://localhost:3000'
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPI();