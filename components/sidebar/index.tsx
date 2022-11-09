import { List, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'

interface SideBarItem {
  path: string
  label: string
}

const Sidebar = ({ items }: { items: SideBarItem[] } = { items: [] }) => {
  const { palette: { primary, text } } = useTheme()
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  return (
    <List className="h-full shadow-md box-border">
      {
        items.map(({ path, label }) => (
          <ListItemButton
            key={path}
            selected={isActive(path)}
            sx={{ mb: 0.5, mx: 1 }}
            className="rounded"
            onClick={() => router.push(path)}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ color: isActive(path) ? primary.main : text.primary }}
                  className={ isActive(path) ? 'font-semibold' : 'font-normal' }
                >
                  {label}
                </Typography>
              }
            />
          </ListItemButton>
        ))
      }
    </List>
  )
}

export default Sidebar
