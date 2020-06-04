import React from 'react';
import { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { StyledContainer, StyledInput, StyledUl } from './search-style'

const OptionList = (options, onClick) => {
    if (typeof (options) === 'undefined' || options === null) {
        return null
    }
    const list = options.map((item, i) => (
        <li key={'optionlist_' + i} onClick={(e) => onClick(item)}>{item}</li>
    ), this)
    return <StyledUl>{list}</StyledUl>
}

export function SearchView({ options, updateOptions, onClick }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value);
        updateOptions(e.target.value)
    }

    const handleClick = (value) => {
        setUserInput(value)
        onClick(value)
    }
    // helperText="Enter a product name"
    return (
        <StyledContainer>
            <StyledInput
                label="Search"
                id="standard-start-adornment"
                type="search"
                variant="outlined"
                size="small"
                fullWidth={true}
                autoComplete='off'
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
                onChange={handleChange}
                value={userInput}
            />
            {OptionList(options, handleClick)}
        </StyledContainer>
    );
}
