import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col p-6 grow text-slate-800">
      <div className="h-56 bg-gray-500 rounded-lg"></div>
      <h2 className="mt-4 text-2xl font-bold">Populer</h2>
      <div className="flex mt-2 h-52">
        <Card />
      </div>
    </div>
  );
}
