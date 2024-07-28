import React from 'react';
import ImagesForm from './ImagesForm';
import PriceForm from './PriceForm';
import AddressForm from './AddressForm';
import TagsForm from './TagsForm';
import ContentForm from './ContentForm';
import RatingForm from './RatingForm';

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children &&
        React.Children.map(children, (child, index) => (
          <>
            {child}
            {index < React.Children.count(children) - 1 && (
              <div className="line-border" />
            )}
          </>
        ))}
    </div>
  );
};

interface Props {
  korName: string;
}

function ReviewForm({ korName }: Props) {
  return (
    <section className="px-5 pt-9 pb-20">
      <Section>
        <RatingForm />
        <ContentForm />
        <PriceForm />
        <AddressForm />
        <ImagesForm />
        <TagsForm korName={korName} />
      </Section>
    </section>
  );
}

export default ReviewForm;
