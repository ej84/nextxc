import { House, Search } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-rows-11">
        <button className="sidebutton">
          <House fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Home</p>
        </button>
        <button className="sidebutton">
          <Search fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Explore</p>
        </button>
      </div>
    </main>
  );
}
