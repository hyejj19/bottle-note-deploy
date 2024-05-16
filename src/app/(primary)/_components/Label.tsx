import React from 'react';

interface Props {
  name: string;
  style?: string;
}

function Label({ name, style = 'border-white' }: Props) {
  return (
    <div>
      <div
        className={`px-2.5 py-1 border rounded-md text-xxs inline-block ${style}`}
      >
        {name}
      </div>
    </div>
  );
}

export default Label;
