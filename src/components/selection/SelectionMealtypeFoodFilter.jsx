import React, { useState } from "react";
import { Select } from "antd";

function SelectionMealtypeFoodFilter() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div> Lọc theo bữa ăn</div>
      <Select
        defaultValue="Bữa sáng"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Bữa sáng",
            label: "Bữa sáng",
          },
          {
            value: "Bữa trưa",
            label: "Bữa trưa",
          },
          {
            value: "Bữa tối",
            label: "Bữa tối",
          },
        ]}
      />
    </>
  );
}

export default SelectionMealtypeFoodFilter;
