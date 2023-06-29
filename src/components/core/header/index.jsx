/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import React from "react";

const { Header } = Layout;

export const AppHeader = React.memo(
  ({ isMobile, collapsed, handleCollapse }) => (
    <Header
      style={{
        padding: 0,
        background: theme.useToken().token.colorBgContainer,
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={
          isMobile || collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
        onClick={handleCollapse}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
);
