import { Book } from "../assets/Book";
import { Burger } from "../assets/Burger";
import { Chair } from "../assets/Chair";
import { DeskFan } from "../assets/Desk_Fan";
import { Headphones } from "../assets/Headphones";
import { Lamp } from "../assets/Lamp";
import { Monitor } from "../assets/Monitor";
import { Mug } from "../assets/Mug";
import BurgerImage from "../assets/images/models/burger.png";
import BookImage from "../assets/images/models/book.png";
import MonitorImage from "../assets/images/models/monitor.png";
import HeadphonesImage from "../assets/images/models/headphones.png";
import ChairImage from "../assets/images/models/chair.png";
import DeskFanImage from "../assets/images/models/desk_fan.png";
import LampImage from "../assets/images/models/lamp.png";
import MugImage from "../assets/images/models/mug.png";
export const modelsList = [
  {
    name: "Book",
    description: "A classic book model made from reclaimed wood.",
    asset: <Book position={[0, -0.2, 0]} ></Book>,
    img: BookImage,
  },
  {
    name: "Burger",
    description: "A classic book model made from reclaimed wood.",
    asset: <Burger position={[0, -0.05, 0]} scale={[2, 2, 2]} />,
    img: BurgerImage,
  },
  {
    name: "Headphones",
    description: "A classic book model made from reclaimed wood.",
    asset: <Headphones position={[0, -0.2, 0]} scale={[2, 2, 2]} />,
    img: HeadphonesImage,
  },
  {
    name: "Monitor",
    description: "A classic book model made from reclaimed wood.",
    asset: <Monitor position={[0, -0.2, 0.01]} scale={[1, 1, 1]} />,
    img: MonitorImage,
  },
  {
    name: "Chair",
    description: "A classic book model made from reclaimed wood.",
    asset: <Chair position={[-0.01, -0.3, 0.0]} scale={[0.5, 0.5, 0.5]} />,
    img: ChairImage,
  },
  {
    name: "Desk fan",
    description: "A classic book model made from reclaimed wood.",
    asset: <DeskFan position={[-0.01, -0.15, 0.0]} scale={[1, 1, 1]} />,
    img: DeskFanImage,
  },
  {
    name: "Lamp",
    description: "A classic book model made from reclaimed wood.",
    asset: <Lamp position={[0, -0.3, 0.0]} scale={[0.9, 0.9, 0.9]} />,
    img: LampImage,
  },
  {
    name: "Mug",
    description: "A classic book model made from reclaimed wood.",
    asset: <Mug position={[0, -0.05, 0.0]} scale={[1.1, 1.1, 1.1]} />,
    img: MugImage,
  },
];
// function modelsList() {
//   return [
//     {
//       name: "Book",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Book position={[0, -0.2, 0]} />,
//       img: BookImage,
//     },
//     {
//       name: "Burger",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Burger position={[0, -0.05, 0]} scale={[2, 2, 2]} />,
//       img: BurgerImage,
//     },
//     {
//       name: "Headphones",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Headphones position={[0, -0.2, 0]} scale={[2, 2, 2]} />,
//       img: HeadphonesImage,
//     },
//     {
//       name: "Monitor",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Monitor position={[0, -0.2, 0.01]} scale={[1, 1, 1]} />,
//       img: MonitorImage,
//     },
//     {
//       name: "Chair",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Chair position={[-0.01, -0.3, 0.0]} scale={[0.5, 0.5, 0.5]} />,
//       img: ChairImage,
//     },
//     {
//       name: "Desk fan",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <DeskFan position={[-0.01, -0.15, 0.0]} scale={[1, 1, 1]} />,
//       img: DeskFanImage,
//     },
//     {
//       name: "Lamp",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Lamp position={[0, -0.3, 0.0]} scale={[0.9, 0.9, 0.9]} />,
//       img: LampImage,
//     },
//     {
//       name: "Mug",
//       description: "A classic book model made from reclaimed wood.",
//       asset: <Mug position={[0, -0.05, 0.0]} scale={[1.1, 1.1, 1.1]} />,
//       img: MugImage,
//     },
//   ];
// }
// export { modelsList };
