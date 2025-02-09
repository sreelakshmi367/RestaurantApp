import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center bg-transparent z-50">
      <BottomNavigation
        sx={{
          width: "100%", 
          backgroundColor: "#0e7490",
          color: "white",
          borderRadius: "10px 10px 10px 10px", 
          padding: "0.5rem",
          marginX: "0.5rem", 
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)", 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Menu"
          icon={<MenuIcon />}
          sx={{ 
            color: "white", 
            "&.Mui-selected": { color: "white" },
            fontSize: "1.25rem", 
          }}
        />
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{ 
            color: "white", 
            "&.Mui-selected": { color: "white" },
            fontSize: "1.25rem",
          }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          sx={{ 
            color: "white", 
            "&.Mui-selected": { color: "white" },
            fontSize: "1.25rem",
          }}
        />
        <BottomNavigationAction
          label="WhatsApp"
          icon={<WhatsAppIcon />}
          sx={{ 
            color: "white", 
            "&.Mui-selected": { color: "white" },
            fontSize: "1.25rem",
          }}
        />
      </BottomNavigation>
    </div>
  );
}
