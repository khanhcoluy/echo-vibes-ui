export interface SectionItemDataType {
  idItem: number;
  modeItem: string;
  titleItem: string;
  imgItem: string;
  descItem: string;
}

export interface SectionDataType {
  id: number;
  title: string;
  list: SectionItemDataType[];
}

export const SECTION_DATA: SectionDataType[] = [
  {
    id: 1,
    title: 'Dành cho tôi',
    list: [
      {
        idItem: 1,
        modeItem: 'artist',
        titleItem: 'Daily Mix 1',
        imgItem:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        idItem: 2,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 2',
        imgItem:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        idItem: 3,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 3',
        imgItem:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        idItem: 4,
        modeItem: 'artist',
        titleItem: 'Daily Mix 4',
        imgItem:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        descItem:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        idItem: 5,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 5',
        imgItem:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        idItem: 6,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 6',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        idItem: 7,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 7',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        idItem: 8,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 8',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 2,
    title: 'Ô thôi xong',
    list: [
      {
        idItem: 4,
        modeItem: 'artist',
        titleItem: 'Daily Mix 4',
        imgItem:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        descItem:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        idItem: 5,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 5',
        imgItem:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        idItem: 6,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 6',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        idItem: 8,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 8',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 3,
    title: 'em Khánh Cổ Lũy',
    list: [
      {
        idItem: 1,
        modeItem: 'artist',
        titleItem: 'Daily Mix 1',
        imgItem:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        idItem: 2,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 2',
        imgItem:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        idItem: 3,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 3',
        imgItem:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        idItem: 4,
        modeItem: 'artist',
        titleItem: 'Daily Mix 4',
        imgItem:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        descItem:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        idItem: 5,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 5',
        imgItem:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        idItem: 6,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 6',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 4,
    title: 'Mythic LOL',
    list: [
      {
        idItem: 1,
        modeItem: 'artist',
        titleItem: 'Daily Mix 1',
        imgItem:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        idItem: 2,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 2',
        imgItem:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        idItem: 3,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 3',
        imgItem:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        idItem: 4,
        modeItem: 'artist',
        titleItem: 'Daily Mix 4',
        imgItem:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        descItem:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        idItem: 5,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 5',
        imgItem:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        idItem: 6,
        modeItem: 'playlist',
        titleItem: 'Daily Mix 6',
        imgItem:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descItem:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
];

export const getSectionDataById = (id: number) => {
  return SECTION_DATA.find((section) => section.id === id);
};
