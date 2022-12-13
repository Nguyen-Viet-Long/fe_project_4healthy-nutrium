import React, { useState } from "react";
import { Select } from "antd";

function SelectionCategories() {
  const [placement, SetPlacement] = useState("bottomLeft");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div>Lọc theo loại món ăn</div>
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
            value: "Rau",
            label: "Rau",
          },
        ]}
      />
    </>
  );
}

export default SelectionCategories;
