import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overridden)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

export const CartIcon: React.FC = () => (
  <Space
    style={{
      fontSize: "42px",
      marginLeft: "30px",
      color: "black",
      marginTop: "-8px",
    }}
  >
    <IconFont type="icon-shoppingcart" />
  </Space>
);

// export default App;
