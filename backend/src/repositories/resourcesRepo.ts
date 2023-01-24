import Resource from '../models/resource';

export function getResourcesByImperiumId(imperiumId: number) {
  return Resource.findAll({
    where: {
      imperiumId: imperiumId,
    },
  });
}

export function updateMineralAmountByImperiumId(imperiumId: number, amount: number) {
  return Resource.update(
    { amount: amount },
    {
      where: {
        imperiumId: imperiumId,
        name: "mineral"
      },
    }
  );
}

export function updateFoodAmountByImperiumId(imperiumId: number, amount: number) {
  return Resource.update(
    { amount: amount },
    {
      where: {
        imperiumId: imperiumId,
        name: "food"
      },
    }
  );
}


export function updateFoodGenerationByImperiumId(imperiumId: number, generation: number) {
  return Resource.update(
    { generation: generation },
    {
      where: {
        imperiumId: imperiumId,
        name: "food"
      },

    }
  );
}

export function updateMineralGenerationByImperiumId(imperiumId: number, generation: number) {
  return Resource.update(
    { generation: generation },
    {
      where: {
        imperiumId: imperiumId,
        name: "mineral"
      },

    }
  );
}