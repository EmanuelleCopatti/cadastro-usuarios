// src/components/UserList.jsx
//teste
import React from "react";
import { Typography, List, ListItem, ListItemText, Divider, Box } from "@mui/material";

export default function UserList({ users }) {
  if (users.length === 0) {
    return (
      <Typography
        variant="body1"
        color="text.primary"
        align="center"
        sx={{ mt: 2 }}
      >
        Nenhum usuário cadastrado ainda.
      </Typography>
    );
  }

  return (
    <Box sx={{ maxHeight: 350, overflowY: "auto" }}>
      <List>
        {users.map((user, i) => (
          <React.Fragment key={i}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#311b92" }}
                  >
                    {user.nome}
                  </Typography>
                }
                secondary={
                  <Typography color="text.secondary">{user.email}</Typography>
                }
              />
            </ListItem>
            {i < users.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
