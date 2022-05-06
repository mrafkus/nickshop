import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <img className="w-full h-full rounded-lg" src="/src/assets/home.jpeg" />
      <h2 className="mt-4 text-2xl font-bold">Populer</h2>
      <div className="flex mt-2 h-52">
        <Card />
      </div>
    </>
  );
}
