import { Box } from "@mui/material";

/**
 *
 * @param {{
 * children: ReactNode | JSX.Element;
 * index: number;
 * currentTabIndex: number;
 * sx: {}
 * }} props
 * @returns {JSX.Element}
 */
export default function TabPanel(props) {
  const { children, currentTabIndex = 0, index, sx = {}, ...other } = props;

  return (
    <div role="tabpanel" hidden={currentTabIndex !== index} {...other}>
      {currentTabIndex === index && <Box sx={{ p: 0, ...sx }}>{children}</Box>}
    </div>
  );
}
