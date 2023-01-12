import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import { getPlanetDataByName } from "../data/data";

export interface CurrentPlanet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

interface PlanetsState {
  currentPlanet: CurrentPlanet;
  setCurrentPlanet: (planet: string | undefined) => void;
}

const defaultPlanet: CurrentPlanet = {
  name: "Mercury",
  overview: {
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  },
  structure: {
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
  },
  geology: {
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
  },
  rotation: "58.6 Days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430°c",
  images: {
    planet: "./assets/planet-mercury.svg",
    internal: "./assets/planet-mercury-internal.svg",
    geology: "./assets/geology-mercury.png",
  },
};

export const usePlanetsStore = create<PlanetsState>()(
  devtools(
    (set) => ({
      currentPlanet: defaultPlanet,
      setCurrentPlanet: (planet) => {
        if (!planet) {
          set({ currentPlanet: defaultPlanet });
          return;
        }
        const planetData = getPlanetDataByName(planet);
        set({ currentPlanet: planetData });
      },
    }),
    {
      name: "planet-data",
    }
  )
);
