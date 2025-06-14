import CityAutocomplete from "./components/utils/CityAutocomplete";
import WeatherHeroCard from "./components/WeatherHeroCard";

export default function Home() {
  return (
    <div className="flex justify-center flex-col gap-3 items-center mx-auto max-w-2xl ">
      <WeatherHeroCard />
    </div>
  );
}
