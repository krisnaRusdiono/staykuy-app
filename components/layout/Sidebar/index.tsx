import { useLayoutContext } from '@/context/layout';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Sidebar = () => {
  const { isCollapsed, manualToggleCollapse } = useLayoutContext();

  return (
    <Drawer open={isCollapsed} onClose={() => manualToggleCollapse(false)}>
      <Box
        sx={{ width: 250 }}
        onClick={() => manualToggleCollapse(false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
