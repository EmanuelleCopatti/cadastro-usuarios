// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6a1b9a", // Roxo vibrante
    },
    secondary: {
      main: "#43a047", // Verde médio
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#3e2c56",
      secondary: "#4a4a4a",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: 1.2,
      marginBottom: 20,
      color: "#3e2c56",
    },
  },
});

export default function App() {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "" });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim()) return;

    setUsers((prev) => [...prev, form]);
    setForm({ nome: "", email: "" });
    setTab(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 6 }}>
        <Container maxWidth="sm">
          <Paper
            elevation={10}
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0 12px 30px rgba(106, 27, 154, 0.25)",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Cadastro de Usuários
            </Typography>
            <Tabs
              value={tab}
              onChange={handleChangeTab}
              centered
              textColor="primary"
              indicatorColor="secondary"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              <Tab label="Cadastrar" sx={{ fontWeight: "bold" }} />
              <Tab label="Usuários Cadastrados" sx={{ fontWeight: "bold" }} />
            </Tabs>

            {tab === 0 && (
              <UserForm
                form={form}
                handleChange={handleChangeForm}
                handleSubmit={handleSubmitForm}
              />
            )}
            {tab === 1 && <UserList users={users} />}
          </Paper>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            © 2025 Cadastro Usuários - Feito com React & MUI
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
