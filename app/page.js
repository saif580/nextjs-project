export default function Home() {
  //Will not be seen on client side only on server side i.e terminal
  console.log("hello world");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course !</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
