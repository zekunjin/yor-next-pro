import { List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'

interface SideBarItem {
  path: string
  label: string
}

const SideBar = ({ items }: { items: SideBarItem[] } = { items: [] }) => {
  const theme = useTheme()
  const { pathname } = useRouter()

  return (
    <List>
      <ListItem>
       {
         items.map(({ path, label }) => (
           <ListItemButton key={path} selected={pathname === path}>
              <ListItemText
                primary={
                  <Typography sx={{ ...theme.typography.subtitle2 }}>{label}</Typography>
                }
              />
            </ListItemButton>
         ))
       }
      </ListItem>
    </List>
  )
}

export default SideBar
