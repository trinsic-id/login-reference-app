/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import { Modal, ModalTransition, useModal } from "react-simple-hook-modal";

import { api } from '../services/api';

export default function SignUp() {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
  });
  const [url, setUrl] = useState('');

  function handleChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await api.post('/api/issue', credentials);
      setUrl(data.offerUrl);
    } catch (err) {
      alert(err.message);
      return;
    }

    openModal();
  }

  return (
    <>
      <Head>
        <title>Sign Up | SSI Auth</title>
      </Head>
      <Modal id="offer" isOpen={isModalOpen} transition={ModalTransition.NONE} className="relative">
        <button className="fixed top-0 right-0 font-bold text-gray-400 hover:brightness-75 p-4" onClick={closeModal}>
          X
        </button>
        <section className="flex flex-col items-center justify-between">
          <p className="mb-4 font-bold text-xl">Open your Trinsic Wallet and scan this QR code to save your credential</p>

          <img src={`https://chart.googleapis.com/chart?cht=qr&chl=${url}&chs=300x300&chld=L|1`} alt="issue invite" className="block w-1/2" />

          <Link href="/">
            <a className="block w-full rounded p-2 text-center bg-blue-600 font-bold text-white transition hover:brightness-90">
              Done
            </a>
          </Link>
        </section>
      </Modal>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <main className="w-1/3 bg-white px-8 py-12 rounded shadow">
          <h1 className="mb-1 text-blue-600 text-2xl font-bold">
            Sign Up for a Credential
          </h1>

          <hr className="mb-4" />

          <p className="text-gray-700 text-lg mb-4">
            Fill the forms below to get a verifiable credential containing you account information to sign in.
          </p>

          <p className="text-gray-700 text-lg mb-8">
            You will need to save this credential in a SSI wallet such as {' '}
            <a className="text-blue-600 hover:underline" href="https://trinsic.id/trinsic-wallet/" target="_blank" rel="noreferrer">
              Trinsic Wallet
            </a>
            .
          </p>

          <form className="mb-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-1">Name:</label>
              <input
                name="name"
                type="text"
                value={credentials.name}
                onChange={handleChange}
                placeholder="Lucas Castro"
                className="block w-full bg-white rounded p-2 border"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Email:</label>
              <input
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="lucas@trinsic.id"
                className="block w-full bg-white rounded p-2 border"
                required
              />
            </div>

            <button
              type="submit"
              className="block w-full p-2 rounded bg-blue-600 text-white font-bold hover:brightness-90 transition"
            >
              Issue
            </button>
          </form>

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
