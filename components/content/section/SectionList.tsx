import SectionItem from './SectionItem';

import { SectionItemDataType } from '@/components/MockData';

const SectionList = ({
  list,
  sectionPage,
}: {
  list: SectionItemDataType[];
  sectionPage?: boolean;
}) => {
  const listItem = (list: SectionItemDataType[]) => {
    if (!sectionPage && list.length > 5) {
      return list.filter((item, idx) => idx < 5);
    } else {
      return list;
    }
  };
  return (
    <div className={`flex gap-4 ${sectionPage ? 'flex-wrap' : ''}`}>
      {listItem(list).map((item) => (
        <SectionItem key={item.idItem} item={item} />
      ))}
    </div>
  );
};

export default SectionList;
