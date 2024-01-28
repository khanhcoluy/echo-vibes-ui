import SectionHeader from './SectionHeader';
import SectionList from './SectionList';

import { SectionDataType } from '@/components/MockData';

const SectionContainer = ({
  data,
  sectionPage,
}: {
  data: SectionDataType;
  sectionPage?: boolean;
}) => {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeader
        sectionPage={sectionPage}
        id={data.id}
        title={data.title}
      />
      <SectionList sectionPage={sectionPage} list={data.list} />
    </section>
  );
};

export default SectionContainer;
