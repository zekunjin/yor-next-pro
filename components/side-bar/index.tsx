import { List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'

interface SideBarItem {
  path: string
  label: string
}

const SideBar = ({ items }: { items: SideBarItem[] } = { items: [] }) => {
  const { typography: { fontSize }, palette: { primary, text } } = useTheme()
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  return (
    <List>
      <ListItem className="block">
       {
         items.map(({ path, label }) => (
           <ListItemButton key={path} selected={isActive(path)} onClick={() => router.push(path)}>
              <ListItemText
                primary={
                  <Typography
                    variant={isActive(path) ? 'inherit' : 'body1'}
                    sx={{
                      color: isActive(path) ? primary.main : text.secondary,
                      fontSize
                    }}
                    className="transition-all"
                  >
                   {label}
                  </Typography>
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
