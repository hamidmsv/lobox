import type { Option } from "../components/multiSelect/types";
import education from "../assets/icons/education.png";
import science from "../assets/icons/science.png";
import art from "../assets/icons/art.png";
import sport from "../assets/icons/sport.png";
import games from "../assets/icons/games.png";
import health from "../assets/icons/health.png";


export const options: Option[] = [
  {
    value: "education",
    label: "Education",
    icon: education,
  },
  {
    value: "science",
    label: "Yeaaah! Science!",
    icon: science,
  },
  {
    value: "art",
    label: "Art",
    icon: art,
  },
  {
    value: "sport",
    label: "Sport",
    icon: sport,
  },
  {
    value: "games",
    label: "Games",
    icon: games,
  },
  {
    value: "health",
    label: "Health",
    icon: health,
  },
];
