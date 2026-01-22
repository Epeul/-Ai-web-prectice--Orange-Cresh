import { MenuItem, MerchItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Sunset Orange Latte",
    description: "진한 에스프레소와 상큼한 오렌지 시럽의 키치한 만남. 시그니처 크림이 올라간 환상적인 밸런스.",
    price: "6.5",
    image: "https://picsum.photos/seed/orange-latte/600/800",
    tag: "SIGNATURE"
  },
  {
    id: 2,
    name: "Retro Cherry Pudding",
    description: "할머니 찬장에서 꺼낸 듯한 빈티지 글라스에 담긴, 탱글탱글하고 달콤한 커스터드 푸딩.",
    price: "5.0",
    image: "https://picsum.photos/seed/pudding/600/800",
    tag: "BEST SELLER"
  },
  {
    id: 3,
    name: "Funk Basil Toast",
    description: "향긋한 바질 페스토와 썬드라이 토마토, 그리고 크림치즈를 듬뿍 바른 바삭한 오픈 토스트.",
    price: "7.5",
    image: "https://picsum.photos/seed/toast/600/800",
    tag: "BRUNCH"
  }
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: 1,
    name: "Kitsch Logo Mug",
    price: "18,000 KRW",
    image: "https://picsum.photos/seed/mug/400/400",
    isNew: true
  },
  {
    id: 2,
    name: "House Blend 'VIBE'",
    price: "22,000 KRW",
    image: "https://picsum.photos/seed/coffeebeans/400/400"
  },
  {
    id: 3,
    name: "Orange Tote Bag",
    price: "15,000 KRW",
    image: "https://picsum.photos/seed/bag/400/400"
  },
  {
    id: 4,
    name: "Retro Glass Cup",
    price: "19,000 KRW",
    image: "https://picsum.photos/seed/glass/400/400",
    isNew: true
  }
];