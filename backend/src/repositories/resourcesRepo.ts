import Resource from '../models/resource';

export function getResourcesByImperiumId(imperiumId: number) {
  return Resource.findAll({
    where: {
      imperiumId: imperiumId,
    },
  });
}

export function updateAmountByImperiumId(imperiumId: number, amount: number) {
  return Resource.update(
    { amount: amount },
    {
      where: {
        imperiumId: imperiumId,
      },
    }
  );
}

export function updateGenerationByImperiumId(imperiumId: number, generation: number) {
  return Resource.update(
    { generation: generation },
    {
      where: {
        imperiumId: imperiumId,
      },
    }
  );
}