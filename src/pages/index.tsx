import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SocialLinks from '../components/SocialLinks';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steven&apos;s Personal Site</title>
        <meta name="description" content="Steven Enriquez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black p-10">
        <h1 className="text-3xl sm:text-4xl text-white text-center">
          Hi, my name is Steven 👋
        </h1>
        <Image className="rounded-full border-4 border-gray-800 w-max mt-6" src="https://github.com/stevenenriquez.png?size=300" alt="Steven Enriquez" width={300} height={300} />
        <p className="text-white text-xl sm:text-2xl mt-12 sm:mt-24 mb-12 lg:w-1/3 md:w-1/2 w-3/4 text-center">
          I&apos;m a full stack web developer from Arizona 🌅 <br/><br/>I&apos;ll be showcasing personal projects, photography, and also writing about topics that interest me. If you&apos;d like, follow me on any of the platforms linked below. Thanks for stopping by.
        </p>
        <SocialLinks />
      </main>
    </>
  );
};

export default Home;
