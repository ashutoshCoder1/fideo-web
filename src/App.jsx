import { RouterProvider } from "react-router-dom";
import router from "./_config/routes";
// import { ConfigProvider } from "antd";

// const theme = Object.freeze({
//   // apply ant design theme
//   token: {
//     // primary color
//     colorPrimary: "#00182A",
//   },
//   components: {
//     Select: {
//       controlItemBgActive: "rgba(5, 145, 255, 0.1)",
//       colorPrimary: "#00182A",
//       colorPrimaryActive: "#002440",
//       colorPrimaryHover: "#00233eff",
//       colorPrimaryBorder: "#002440ff",
//       controlHeight: 40,
//       controlHeightSM: 24,
//       fontSize: 16,
//       lineWidth: 1,
//       paddingContentHorizontal: 20,
//       borderRadius: 4,
//       colorBgContainer: "#ffffff",
//       controlOutlineWidth: 2,
//       controlOutline: "rgba(5, 145, 255, 0.1)",
//     },
//     Input: {
//       colorPrimary: "#00182A",
//       colorPrimaryActive: "#002440",
//       colorPrimaryHover: "#00233eff",
//       colorPrimaryBorder: "#002440ff",
//       controlHeight: 48,
//       controlHeightSM: 32,
//       fontSize: 18,
//       lineWidth: 1,
//       paddingContentHorizontal: 20,
//       borderRadius: 4,
//       colorBgContainer: "#ffffff",
//       controlOutlineWidth: 2,
//       controlOutline: "rgba(5, 145, 255, 0.1)",
//     },
//     Button: {
//       controlOutline: "rgba(5, 145, 255, 0.1)",
//       colorPrimary: "#00182A",
//       colorPrimaryActive: "#002440",
//       colorPrimaryHover: "#00233eff",
//       colorPrimaryBorder: "#002440ff",
//       controlHeight: 48,
//       controlHeightSM: 32,
//       controlOutlineWidth: 2,
//       fontSize: 18,
//       lineWidth: 1,
//       paddingContentHorizontal: 20,
//       borderRadius: 4,
//       colorBgContainer: "#ffffff",
//     },
//     Menu: {
//       itemBorderRadius: 2,
//       activeBarWidth: 3,
//       activeBarBorderWidth: 0,
//       borderRadius: 4,
//       borderRadiusLG: 4,
//       borderRadiusSM: 4,
//       itemSelectedBg: "#25374e",
//       //   boxShadowSecondary:
//       //     "0 6px 16px 0 #0303485d, 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
//       //   colorBgContainer: "#ffffff",
//       //   colorBgElevated: "#ffffff",
//       //   colorBgTextHover: "rgba(0, 0, 0, 0.06)",
//       //   colorError: "#ff4d4f",
//       //   colorErrorBg: "#fff2f0",
//       //   colorErrorHover: "#ff7875",
//       //   colorFillAlter: "rgba(0, 0, 0, 0.02)",
//       //   colorFillContent: "rgba(0, 0, 0, 0.06)",
//       //   colorPrimary: "#000000",
//       //   colorPrimaryBorder: "#262626",
//       //   colorSplit: "rgba(5, 5, 5, 0.06)",
//       //   colorText: "rgba(0, 0, 0, 0.88)",
//       //   colorTextDescription: "rgba(0, 0, 0, 0.45)",
//       //   colorTextDisabled: "rgba(0, 0, 0, 0.25)",
//       //   colorTextLightSolid: "#fff",
//       controlHeightLG: 48,
//       //   controlHeightSM: 24,
//       // controlItemBgActive: "#e8e8e8",
//       //   fontFamily:
//       //     "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
//       // fontSize: 16,
//       //   fontSizeLG: 16,
//       //   lineHeight: 1.5714285714285714,
//       //   lineType: "solid",
//       //   lineWidth: 1,
//       //   lineWidthBold: 2,
//       //   lineWidthFocus: 4,
//       //   margin: 16,
//       //   marginXS: 8,
//       //   marginXXS: 4,
//       motionDurationMid: "0.1s",
//       motionDurationSlow: "0.2s",
//       motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
//       motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
//       motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
//       motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
//       motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
//       motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
//       //   padding: 16,
//       //   paddingXL: 32,
//       //   paddingXS: 8,
//       //   zIndexPopupBase: 1000,
//     },
//   },
// });

function App() {
  return (
    // <ConfigProvider theme={theme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    // </ConfigProvider>
  );
}

export default App;
