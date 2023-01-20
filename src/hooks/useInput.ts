import { ChangeEvent, useState } from 'react';

const useInput = (initialState: string) => {
  const [value, setValue] = useState<string>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
