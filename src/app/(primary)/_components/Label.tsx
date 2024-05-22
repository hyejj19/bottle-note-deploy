import React from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  style?: string;
  icon?: string;
}

function Label({
  name,
  icon,
  style = 'border-white px-2.5 py-1 rounded-md',
}: Props) {
  return (
    <div>
      <div className={`border text-xxs inline-block ${style}`}>
        <div className="flex items-center">
          {icon && (
            <Image
              className="mr-1"
              src={icon}
              width={14}
              height={14}
              alt="best"
            />
          )}
          {name}
        </div>
      </div>
    </div>
  );
}

export default Label;
