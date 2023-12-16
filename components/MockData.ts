export interface SectionItemDataType {
  itemId: number;
  itemType: string;
  itemTitle: string;
  itemImg: string;
  itemDesc: string;
}

export interface SectionDataType {
  id: number;
  title: string;
  list: SectionItemDataType[];
}

export const SECTION_DATA: SectionDataType[] = [
  {
    id: 1,
    title: 'Made For You',
    list: [
      {
        itemId: 1,
        itemType: 'artist',
        itemTitle: 'Daily Mix 1',
        itemImg:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        itemId: 2,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 2',
        itemImg:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        itemId: 3,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 3',
        itemImg:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        itemId: 4,
        itemType: 'artist',
        itemTitle: 'Daily Mix 4',
        itemImg:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        itemDesc:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        itemId: 5,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 5',
        itemImg:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        itemId: 6,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 6',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        itemId: 7,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 7',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        itemId: 8,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 8',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 2,
    title: 'Oh My God',
    list: [
      {
        itemId: 4,
        itemType: 'artist',
        itemTitle: 'Daily Mix 4',
        itemImg:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        itemDesc:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        itemId: 5,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 5',
        itemImg:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        itemId: 6,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 6',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
      {
        itemId: 8,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 8',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 3,
    title: 'Lil Bro Khanh Co Luy',
    list: [
      {
        itemId: 1,
        itemType: 'artist',
        itemTitle: 'Daily Mix 1',
        itemImg:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        itemId: 2,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 2',
        itemImg:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        itemId: 3,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 3',
        itemImg:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        itemId: 4,
        itemType: 'artist',
        itemTitle: 'Daily Mix 4',
        itemImg:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        itemDesc:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        itemId: 5,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 5',
        itemImg:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        itemId: 6,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 6',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
  {
    id: 4,
    title: 'Mythic LOL',
    list: [
      {
        itemId: 1,
        itemType: 'artist',
        itemTitle: 'Daily Mix 1',
        itemImg:
          'https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI, HIEUTHUHAI',
      },
      {
        itemId: 2,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 2',
        itemImg:
          'https://images.unsplash.com/photo-1700925338124-feb7c3dae1d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP, Sơn Tùng M-TP',
      },
      {
        itemId: 3,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 3',
        itemImg:
          'https://images.unsplash.com/photo-1700664957873-eed7960589f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt, Thắng Ngọt',
      },
      {
        itemId: 4,
        itemType: 'artist',
        itemTitle: 'Daily Mix 4',
        itemImg:
          'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1cbc9e7ba8fbc5d7738ea51/1/vi/default',
        itemDesc:
          'Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke, Pop Smoke',
      },
      {
        itemId: 5,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 5',
        itemImg:
          'https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch, Roddy Ricch',
      },
      {
        itemId: 6,
        itemType: 'playlist',
        itemTitle: 'Daily Mix 6',
        itemImg:
          'https://images.unsplash.com/photo-1699619093007-c4fb05dcdd0f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        itemDesc:
          'Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú, Hải Tú',
      },
    ],
  },
];

export const getSectionDataById = (id: number) => {
  return SECTION_DATA.find((section) => section.id === id);
};
