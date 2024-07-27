import { Drawer } from "@mui/material";

export const AppDrawer = ({ open = false, onClose = null, children }: any) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose && onClose()}
      elevation={0}
      PaperProps={{ sx: { width: { md: "38vw", xl: "30vw" } } }}
    >
      {children}
    </Drawer>
  );
};
