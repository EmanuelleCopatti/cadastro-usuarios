import React from "react";
import { Tabs, Tab } from "@mui/material";

const TabNavigation = ({ tab, setTab }) => (
  <Tabs
    value={tab}
    onChange={(_e, newValue) => setTab(newValue)}
    centered
  >
    <Tab label="Cadastrar Usuário" />
    <Tab label="Usuários Cadastrados" />
  </Tabs>
);

export default TabNavigation;
