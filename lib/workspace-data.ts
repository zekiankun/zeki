import { Laptop, Headphones, Armchair } from "lucide-react";
import { type WorkspaceItem } from "@/types/workspace";

const imagesPath = "/images/workspaces";

export const WorkspaceIcons = {
  Hardware: Laptop,
  Accessory: Headphones,
  Furniture: Armchair
};

export const WorkspaceData: WorkspaceItem[] = [
  {
    category: "Hardware",
    items: [
      {
        name: "Monster Abra A5 V9.2 15.6",
        description: "Intel Core i7, Nvidia Geforce GTX, 16 GB RAM, 256 GB SSD, 1 TB HDD",
        image: `${imagesPath}/abra-a5-v9.jpg`
      },
      {
        name: "LG UltraWide Curved Monitor",
        description: "37.5 inch 38WR85QC-W 144Hz 1ms QHD",
        image: `${imagesPath}/lg-ultrawide.jpg`
      },
      {
        name: "Logitech MX Keys Mini Keyboard",
        description: "White, multiple devices, US International",
        image: `${imagesPath}/logitech-mx-keys-mini.jpg`
      },
      {
        name: "Logitech Lift Mouse",
        description: "White, multiple devices, ergonomic",
        image: `${imagesPath}/logitech-lift-mouse.jpg`
      },
    ]
  },
  {
    category: "Accessory",
    items: [
      {
        name: "Ikea Lanespelare Mouse Pad",
        description: "Patterned, 90x40",
        image: `${imagesPath}/ikea-mouse-pad.jpg`
      },
      {
        name: "Huawei Freebuds Pro 3 Headphones",
        description: "Ice grey, smart noise cancelling",
        image: `${imagesPath}/huawei-freebuds-pro3.jpg`
      },
      {
        name: "InfinityLab InstantStation Wireless Charger Stand",
        description: "White, 33W, USB-C/USB-A, QI Fast Charging",
        image: `${imagesPath}/infinitylab-instantstation.jpg`
      },
    ]
  },
  {
    category: "Furniture",
    items: [
      {
        name: "Sagiroglu Wooden Table",
        description: "80x180, Log, metal leg",
        image: `${imagesPath}/sagiroglu-wooden-table.jpg`
      },
      {
        name: "ProGamer PR300 Gaming Chair",
        description: "Yellow, 170 degree reclining system, 3D movable armrest",
        image: `${imagesPath}/progamer-pr300-yellow.jpg`
      },
    ]
  }
];