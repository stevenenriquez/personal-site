import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>steven</title>
        <meta name="description" content="Steven Enriquez - Full stack developer from Arizona" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-md mx-auto w-full">

          <header className="mb-16">
            <p className="mono text-sm text-stone-500 mb-4">~/steven</p>
            <h1 className="text-3xl sm:text-4xl font-normal mb-6">
              steven enriquez
            </h1>
            <div className="mono text-sm text-stone-500 space-y-1">
              <p><span className="text-stone-400">$</span> ping steven</p>
              <p className="pl-4">64 bytes from phoenix.az</p>
            </div>
          </header>

          <section className="mb-16 mono text-sm text-stone-600 space-y-1">
            <p><span className="text-stone-400">$</span> status</p>
            <p className="pl-4">building things</p>
            <p className="pl-4">breaking things</p>
            <p className="pl-4">learning things</p>
          </section>
          
          <section className="mb-16 mono text-sm text-stone-600 space-y-1">
            <p><span className="text-stone-400">$</span> groups</p>
            <p className="pl-4">dad dev fullstack</p>
          </section>

          <nav className="mono text-sm text-stone-600 space-y-1">
            <p><span className="text-stone-400">$</span> cat links.txt</p>
            <p className="pl-4">
              <a href="https://github.com/stevenenriquez" target="_blank" rel="noopener noreferrer">github</a> → code
            </p>
            <p className="pl-4">
              <a href="https://linkedin.com/in/stevenenriquez" target="_blank" rel="noopener noreferrer">linkedin</a> → resume
            </p>
            <p className="pl-4">
              <a href="https://twitter.com/stevenedev" target="_blank" rel="noopener noreferrer">x</a> → thoughts
            </p>
          </nav>

          <footer className="mt-20 pt-8 border-t border-stone-200">
            <p className="mono text-xs text-stone-400">
              est. 1998
            </p>
          </footer>

        </div>
      </main>
    </>
  );
};

export default Home;
