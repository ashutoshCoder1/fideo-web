/* eslint-disable react-refresh/only-export-components */
import { HeartFilled } from "@ant-design/icons";
import { Layout, theme } from "antd";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "sticky",
        bottom: 0,
        zIndex: 1,
        background: theme.useToken().token.colorBgContainer,
        height: 64,
      }}
    >
      DiablX Labs India ©2023 Created with{" "}
      <HeartFilled style={{ color: "red" }} />
    </Footer>
  );
}

export default AppFooter;
