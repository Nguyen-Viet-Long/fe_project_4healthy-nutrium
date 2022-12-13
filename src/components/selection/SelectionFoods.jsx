import React, { useState } from "react";
import { Select } from "antd";

function SelectionFoods() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div>Lọc theo nguyên liệu</div>
      <Select
        defaultValue="Cơm"
        style={{
          width: 300,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Cơm",
            label: "Cơm",
          },
          {
            value: "Hạ",
            label: "Lucy",
          },
          {
            value: "Thịt",
            label: "Thịt",
          },
          {
            value: "Canh",
            label: "Canh",
          },
        ]}
      />
    </>
  );
}

export default SelectionFoods;
