import LikeBtn from './LikeBtn';
import Star from './Star';

const ListItem = () => {
  return (
    <article className="flex items-center space-x-4 text-mainBlack border-mainBlack border-b py-4">
      <div>이미지00</div>

      <section className="flex-1 space-y-1.5">
        <article className="flex justify-between items-center">
          <h2 className="whitespace-pre text-[15px] leading-[15px] font-bold line">{`GLENDRONACH\nORIGINAL 12YEAR`}</h2>
          <div className="flex flex-col">
            {/* rating이 null 혹은 0인 경우 invisible */}
            <Star />
            <span className="text-[0.625rem] justify-self-end row-start-2 text-right">
              (16)
            </span>
          </div>
        </article>

        <article className="flex justify-between">
          <p className="text-sm">
            <span className="font-semibold">글렌스로낙 12Y</span>
            <span> · 싱글몰트 위스키</span>
          </p>
          <LikeBtn />
        </article>
      </section>
    </article>
  );
};

export default ListItem;
