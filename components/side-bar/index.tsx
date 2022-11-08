import { List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'

const SideBar = () => {
  const theme = useTheme()

  return (
    <List>
      <ListItem>
        <ListItemButton selected>
          <ListItemText
            primary={
              <Typography sx={{ ...theme.typography.subtitle2 }}>Dashboard</Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default SideBar
