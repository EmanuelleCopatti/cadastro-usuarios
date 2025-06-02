// src/components/UserForm.jsx
import React from "react";
import { TextField, Button, Box } from "@mui/material";

export default function UserForm({ form, handleChange, handleSubmit }) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        fullWidth
        label="Nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        margin="normal"
        required
        autoFocus
        sx={{
          "& .MuiInputLabel-root": { color: "#6a1b9a" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#6a1b9a",
            },
            "&:hover fieldset": {
              borderColor: "#43a047",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#43a047",
            },
          },
        }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        margin="normal"
        required
        type="email"
        sx={{
          "& .MuiInputLabel-root": { color: "#6a1b9a" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#6a1b9a",
            },
            "&:hover fieldset": {
              borderColor: "#43a047",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#43a047",
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 3, py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
      >
        Cadastrar
      </Button>
    </Box>
  );
}
