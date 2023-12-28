import React from 'react';
import { Input, Label } from './FilterStyled';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../redux/selectors';

export const Filter = ({ onFilterInput }) => {
  const filter = useSelector(filterSelector);
  return (
    <div>
      <Label htmlFor="filter">
        Find contacts by name:
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onFilterInput(target.value)}
        />
      </Label>
    </div>
  );
};
