import { SectionDataType } from '@/components/MockData';
import Link from 'next/link';

const SectionHeader = ({
  id,
  title,
  sectionPage,
}: {
  id: number;
  title: string;
  sectionPage?: boolean;
}) => {
  return (
    <div className="flex justify-between">
      {sectionPage ? (
        <>
          <p className="text-2xl font-bold">{title}</p>
        </>
      ) : (
        <>
          <Link
            className="text-2xl font-bold hover:underline"
            href={`/section/${id}`}
          >
            {title}
          </Link>
          <Link
            className="text-sm font-bold text-secondary hover:underline"
            href={`/section/${id}`}
          >
            See all
          </Link>
        </>
      )}
    </div>
  );
};

export default SectionHeader;