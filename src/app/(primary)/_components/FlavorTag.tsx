import React from 'react';
import Label from './Label';

interface Props {
  tagList: string[];
}

function FlavorTag({ tagList }: Props) {
  return (
    <section className="mx-5 py-5 border-b border-mainGray/30 space-y-2">
      <div className="text-xs text-mainDarkGray">FLAVOR TAG</div>
      <div className="flex flex-wrap gap-1">
        {tagList.map((tag, index) => (
          <div key={tag + index} className="overflow-hidden flex-shrink-0">
            <Label
              name={tag}
              style={
                'border-subCoral text-subCoral px-2 py-0.5 rounded-md text-xs'
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlavorTag;
