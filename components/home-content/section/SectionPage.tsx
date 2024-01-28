import { SECTION_DATA } from '@/components/MockData';
import SectionContainer from './SectionContainer';

const SectionPage = () => {
  return (
    <div className="flex flex-col px-6 gap-10">
      {SECTION_DATA.map((sec) => (
        <SectionContainer key={sec.id} data={sec} />
      ))}
    </div>
  );
};

export default SectionPage;
