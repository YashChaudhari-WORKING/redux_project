import CityAutocomplete from "../utils/CityAutocomplete";

export default function Header() {
  return (
    <>
      <div className="bg-[#0e1117] flex justify-between px-[5%] max p-2 py-4 items-center">
        <div>
          <span className="font-medium text-[28px]">Weather.IO</span>
        </div>
        <div>
          <CityAutocomplete />
        </div>
      </div>
    </>
  );
}
