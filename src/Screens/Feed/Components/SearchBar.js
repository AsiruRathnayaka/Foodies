import { useState } from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
  };

  return (
    <OutlinedInput
      placeholder="Search"
      value={searchValue}
      onChange={handleInputChange}
      sx={{
        borderRadius: '30px',
        backgroundColor: '#F3F3F3',
        height:'40px',
        width:"77%",
        '& input': {
          pl: 3,
          pr: 0,
        },
        '& fieldset': {
          border: 'none',
        },
      }}
      endAdornment={
        <InputAdornment position="end">
          {searchValue ? (
            <IconButton
              aria-label="clear search input"
              onClick={handleClearClick}
            >
              <SearchIcon />
            </IconButton>
          ) : (
            <SearchIcon />
          )}
        </InputAdornment>
      }
    />
  );
}

export default SearchBar;
