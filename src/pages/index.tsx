import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SocialLinks from '../components/SocialLinks';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steven's Personal Site</title>
        <meta name="description" content="Steven's Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black p-10">
        <div className="flex items-center justify-center gap-12 w-3/4">
          <h1 className="text-4xl text-white">
            Hi, my name is Steven 👋
          </h1>
          <Image className="rounded-full border border-white w-max" src="https://github.com/stevenenriquez.png?size=250" alt="Steven Enriquez" width={250} height={250} />
        </div>
        <p className="text-white text-2xl mt-24 mb-48 lg:w-1/3 md:w-1/2 w-3/4">
          I'm a full stack web developer from Arizona. If you'd like, follow me on any of the social media linked below. Thanks for stopping by.
        </p>
        <SocialLinks />
      </main>
    </>
  );
};

export default Home;
