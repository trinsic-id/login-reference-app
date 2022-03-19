/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import { trinsic } from '../services/trinsic';
import { AuthContext } from "../contexts/AuthContext";

export default function SignIn({
  verificationRequestUrl,
  verificationId,
}) {
  const [showQR, setShowQR] = useState(false);
  const { signIn } = useContext(AuthContext);

  async function verify() {
    setShowQR(true);
    await signIn(verificationId);
  }

  return (
    <>
      <Head>
        <title>Sign In | SSI Auth</title>
      </Head>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <main className="w-1/3 bg-white px-8 py-12 rounded shadow">
          <h1 className="mb-1 text-blue-600 text-2xl font-bold">
            Sign In with a Credential
          </h1>

          <hr className="mb-4" />

          <p className="text-gray-700 text-lg mb-4">
            Open your SSI wallet application and scan the QR Code below to complete with the sign in process.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            You will need to scan this code with a SSI wallet such as {' '}
            <a className="text-blue-600 hover:underline" href="https://trinsic.id/trinsic-wallet/" target="_blank" rel="noreferrer">
              Trinsic Wallet
            </a>
            .
          </p>

          <button className="block w-full rounded p-2 text-center bg-blue-600 font-bold text-white transition hover:brightness-90 mb-4" onClick={verify}>Show Code</button>

          {showQR && <img src={`https://chart.googleapis.com/chart?cht=qr&chl=${verificationRequestUrl}&chs=300x300&chld=L|1`} alt="issue invite" className="block w-1/2 mx-auto mb-8" />}

          <Link href="/">
            <a className="text-blue-600 hover:underline">
              Go back
            </a>
          </Link>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const {
    verificationRequestUrl,
    verificationId,
  } = await trinsic.createVerificationFromPolicy(process.env.TRINSIC_VERIFICATION_ID);

  return {
    props: {
      verificationRequestUrl,
      verificationId,
    },
  };
}
