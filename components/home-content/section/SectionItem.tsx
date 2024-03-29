import { SectionItemDataType } from '@/components/MockData';
import Image from 'next/image';

const SectionItem = ({ item }: { item: SectionItemDataType }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg w-[calc(20%-(4rem/5))] duration-300 bg-[#181818] hover:bg-[#282828] cursor-pointer">
      <Image
        width={320}
        height={320}
        className={`w-full aspect-square ${
          item.itemType === 'artist' ? 'rounded-full' : 'rounded-md'
        }`}
        alt={item.itemTitle}
        src={item.itemImg}
      />
      <div>
        <h6 className="font-bold pb-1">{item.itemTitle}</h6>
        <p className="text-secondary text-sm line-clamp-2">{item.itemDesc}</p>
      </div>
    </div>
  );
};

export default SectionItem;
