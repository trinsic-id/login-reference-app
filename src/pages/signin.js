import Head from "next/head";
import Link from 'next/link';

export default function SignIn() {
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

          <p className="text-gray-700 text-lg mb-8">
            You will need to scan this code with a SSI wallet such as {' '}
            <a className="text-blue-600 hover:underline" href="https://trinsic.id/trinsic-wallet/" target="_blank" rel="noreferrer">
              Trinsic Wallet
            </a>
            .
          </p>

          {/* <img> */}

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
