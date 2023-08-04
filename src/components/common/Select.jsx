import React, { useEffect, useState } from "react";

import { MenuItem, FormControl, Select } from "@mui/material";

export default function CustomSelect(props) {
  const {
    onChange = (e) => {},
    noneLabel,
    options = [],
    iconType,
    sx = {},
    disableShadow = true,
    width = '100px',
    height = 'auto',
    value = "",
    ...rest
  } = props;
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    onChange(event);
  };

  let iconStyle;

  switch (true) {
    case !!iconType && iconType === "filled":
      iconStyle = {
        "& .MuiSelect-icon": {
          backgroundColor: "primary.main",
          fill: "white",
          height: "100%",
          width: props.iconwidth || "48px",
          top: 0,
          right: 0,
        },
      };
      break;

    default:
      iconStyle = {};
      break;
  }

  useEffect(() => {
    options.forEach(opt => {
      if (opt.selected) {
        setSelectValue(opt.value);
      }
    })
  }, [options]);

  return (
    <FormControl
      sx={{
        borderRadius: "5px",
        minWidth: 120,
        width,
        height,
        backgroundColor: props.backgroundColor,
      }}
    >
      <Select
        value={value || selectValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        // IconComponent="ArrowDropDownOutlined"
        sx={{
          overflow: "hidden",
          boxShadow: disableShadow
            ? "none"
            : "0px 5px 20px rgba(108, 117, 125, 0.15)",
          "& *": {
            border: "none",
          },
          ...iconStyle,
          ...sx,
        }}
        {...rest}
      >
        <MenuItem value="">{noneLabel || <em>None</em>}</MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              value={option.value}
              selected={option.selected}
            >
              {option.name || ""}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
