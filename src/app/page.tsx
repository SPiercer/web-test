"use client";

import Sidebar from "../components/sidebar";
import { UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Input } from "antd";
import { NotificationsOutlined, SearchOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <nav className="h-16 px-4 mb-10 w-full flex items-center">
        {/* Logo */}
        <a href="#" className="flex  text-white min-w-[15vw] ">
          <FontAwesomeIcon icon={fas.faPlay} className="h-6 me-3 sm:h-7" />

          <span className=" text-xl text-white font-bold ">Egybto Store</span>
        </a>

        {/* Seach Bar  h-10 max-w-[25vw] */}
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorTextPlaceholder: "white",
              },
            },
          }}
        >
          <Input
            placeholder="Search"
            suffix={<SearchOutlined />}
            className="h-12 max-w-[30vw]"
            onPressEnter={(e) => console.log(e.currentTarget.value)}
            color="white"
            variant="borderless"
            styles={{
              affixWrapper: {
                color: "white",
                background: "black",
                opacity: 0.4,
                borderRadius: "0.6rem",
              },
            }}
          />
        </ConfigProvider>

        {/* Expanded */}
        <div className="flex-grow"></div>

        {/* end buttons */}
        <div className="flex gap-4 me-4">
          <Button
            icon={<UserOutlined />}
            shape="circle"
            size="large"
            style={{
              border: "none",
              color: "white",
              background: "black",
              opacity: 0.4,
            }}
          />
          <Button
            icon={<NotificationsOutlined />}
            shape="circle"
            size="large"
            style={{
              border: "none",
              color: "white",
              background: "black",
              opacity: 0.4,
            }}
          />
        </div>
        <div className="min-w-[20vw] shadow-lg bg-gray-600 opacity-25 h-full"></div>
      </nav>

      <div className="flex">

        <div className="me-4">
          <Sidebar />
        </div>

        <div className="flex-grow bg-red-400"></div>

        <div className="h-screen min-w-[20vw] shadow-lg bg-gray-600 opacity-25 me-4">
          <div className="flex items-center justify-center h-full"></div>
        </div>

      </div>
    </main>
  );
}
