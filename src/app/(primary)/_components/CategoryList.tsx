import { LinkData } from '@/types/LinkButton';
import { CATEGORY_MENUS } from '@/constants/common';
import LinkButton from '@/components/LinkButton';
import singleMalt from 'public/categoryImg/singleMalt.png';
import america from 'public/categoryImg/america.png';
import blended from 'public/categoryImg/blended.png';
import blendedMalt from 'public/categoryImg/blendedMalt.png';
import other from 'public/categoryImg/other.png';
import rye from 'public/categoryImg/rye.png';
import { CategoryImage } from '@/types/Image';

function CategoryList() {
  const categories = Object.values(CATEGORY_MENUS).filter(
    (category) => category !== CATEGORY_MENUS.All,
  );

  const imageData: {
    [key: string]: CategoryImage;
  } = {
    'Single malt': {
      imgSrc: singleMalt,
      imageSize: { width: 45, height: 130 },
    },
    'Blended malt': {
      imgSrc: blendedMalt,
      imageSize: { width: 105, height: 130 },
    },
    Blended: { imgSrc: blended, imageSize: { width: 38, height: 130 } },
    'America(Bourbon)': {
      imgSrc: america,
      imageSize: { width: 55, height: 130 },
    },
    Rye: { imgSrc: rye, imageSize: { width: 86, height: 130 } },
    Other: { imgSrc: other, imageSize: { width: 44, height: 130 } },
  };

  const menu: LinkData[] = categories.map((category) => {
    const { imgSrc, imageSize } = imageData[category.eng] || {};
    return {
      engName: category.eng,
      korName: category.kor,
      listType: 'Half',
      linkSrc: `/search?category=${category.link}`,
      imgSrc,
      imageSize,
    };
  });

  return (
    <div className="space-y-3">
      <LinkButton
        data={{
          engName: 'ALL',
          korName: '전체',
          linkSrc: '/search?category=',
        }}
      />
      <div className="grid grid-cols-2 gap-3">
        {menu.map((data) => (
          <LinkButton key={data.engName} data={data} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
