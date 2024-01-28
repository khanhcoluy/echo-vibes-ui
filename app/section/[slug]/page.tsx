'use client';

import { useParams } from 'next/navigation';

import ContentHeader from '@/components/home-content/header/ContentHeader';
import SectionContainer from '@/components/home-content/section/SectionContainer';

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
