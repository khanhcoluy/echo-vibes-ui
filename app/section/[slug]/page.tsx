'use client';

import { useParams } from 'next/navigation';

import ContentHeader from '@/components/content/header/ContentHeader';
import SectionContainer from '@/components/content/section/SectionContainer';

import { getSectionDataById } from '@/components/MockData';

const SectionDetailPage = () => {
  const params = useParams();
  const { slug } = params;

  const data = getSectionDataById(+slug);

  return (
    <>
      <ContentHeader />
      <div className="px-6">
        {data ? (
          <SectionContainer sectionPage={true} data={data} />
        ) : (
          <>NO PAGE</>
        )}
      </div>
    </>
  );
};

export default SectionDetailPage;
