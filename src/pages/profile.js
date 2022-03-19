import { useContext } from 'react'
import Head from "next/head";
import { parseCookies } from "nookies";

import { AuthContext } from '../contexts/AuthContext';
import { api } from '../services/api';

export default function Profile({ user }) {
  const { signOut } = useContext(AuthContext);
  
  return (
    <>
      <Head>
        <title>Profile | SSI Auth</title>
      </Head>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <main className="w-1/3 bg-white px-8 py-12 rounded shadow">
          <h1 className="mb-1 text-blue-600 text-2xl font-bold">
            User Account Information
          </h1>

          <hr className="mb-4" />

          <p className="text-gray-700 text-lg mb-4">
            Below you will find the account information that was encoded in the auth token.
          </p>

          <section className="mb-8">
            <div className="mb-4">
              <label className="block font-bold mb-1">Account ID:</label>
              <input
                name="id"
                type="text"
                value={user.id}
                className="block w-full bg-gray-100 rounded p-2 border"
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Name:</label>
              <input
                name="name"
                type="text"
                value={user.name}
                className="block w-full bg-gray-100 rounded p-2 border"
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Email:</label>
              <input
                name="email"
                type="email"
                value={user.email}
                className="block w-full bg-gray-100 rounded p-2 border"
                disabled
              />
            </div>
          </section>

          <button className="text-blue-600 hover:underline" onClick={signOut}>Sign out</button>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { ['ssi.token']: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { data } = await api.get('/api/user', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return {
    props: {
      user: data.user
    }
  };
}