import { CARD_TITLES, CARD_INFO_TXTS } from "../constants";

export const getLandingCardsData = (buildings, rooms, meetings) => {
  const cardsData = [];
  cardsData.push({
    cardTitle: CARD_TITLES.BUILDINGS,
    cardContent: [{ label: CARD_INFO_TXTS.TOTAL, value: buildings.length }],
  });
  cardsData.push({
    cardTitle: CARD_TITLES.ROOMS,
    cardContent: [
      { label: CARD_INFO_TXTS.TOTAL, value: rooms.total },
      { label: CARD_INFO_TXTS.FREE_ROOM, value: rooms.free },
    ],
  });
  cardsData.push({
    cardTitle: CARD_TITLES.MEETINGS,
    cardContent: [
      { label: CARD_INFO_TXTS.MEETINGS_TODAY, value: meetings.total },
      { label: CARD_INFO_TXTS.MEETINGS_CURRENT, value: meetings.goingNow },
    ],
  });

  return cardsData;
};
