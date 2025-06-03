// src/components/UserForm.jsx
//. 
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
          "& .MuiInputLabel-root": { color: "#311b92" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#388e3c",
            },
            "&:hover fieldset": {
              borderColor: "#311b92",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#311b92",
            },
          },
          input: {
            color: "#212121",
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
          "& .MuiInputLabel-root": { color: "#311b92" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#388e3c",
            },
            "&:hover fieldset": {
              borderColor: "#311b92",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#311b92",
            },
          },
          input: {
            color: "#212121",
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3, py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
      >
        Cadastrar
      </Button>
    </Box>
  );
}
