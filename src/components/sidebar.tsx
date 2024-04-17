import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";
import { Drawer, Button, List, Avatar } from "antd";
import { CSSProperties } from "react";

const maxWidth: CSSProperties = {
  maxWidth: "15vw",
  background: "transparent",
  boxShadow: "none",
};

export default function Sidebar() {
  return (
    <div
      className="
      flex flex-col
      gap-4 h-screen
      text-white
      min-w-[15vw]
      "
    >
      <Button
        icon={<FontAwesomeIcon icon={fas.faHome} />}
        type="text"
        size="large"
        style={{ color: "white", textAlign: "start" }}
      >
        Home
      </Button>
      <Button
        icon={<FontAwesomeIcon icon={fas.faListDots} />}
        type="text"
        style={{ color: "white", textAlign: "start" }}
        size="large"
      >
        Category
      </Button>
      <Button
        icon={<FontAwesomeIcon icon={fas.faStore} />}
        type="text"
        style={{ color: "white", textAlign: "start" }}
        size="large"
      >
        Libary
      </Button>
    </div>
  );
}
