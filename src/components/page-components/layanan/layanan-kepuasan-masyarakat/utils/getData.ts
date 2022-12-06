type Output = {
  theData: number[];
  total: number;
};

export const getData = async (): Promise<Output> => {
  let theData: number[] = [];
  let total = 0;
  await fetch("https://api.countapi.xyz/get/bridantbprov/sangat-puas")
    .then((r) => r.json())
    .then((data) => {
      theData.push(data.value);
      total += data.value;
    });
  await fetch("https://api.countapi.xyz/get/bridantbprov/cukup-puas")
    .then((r) => r.json())
    .then((data) => {
      theData.push(data.value);
      total += data.value;
    });
  await fetch("https://api.countapi.xyz/get/bridantbprov/puas")
    .then((r) => r.json())
    .then((data) => {
      theData.push(data.value);
      total += data.value;
    });
  await fetch("https://api.countapi.xyz/get/bridantbprov/kurang-puas")
    .then((r) => r.json())
    .then((data) => {
      theData.push(data.value);
      total += data.value;
    });
  await fetch("https://api.countapi.xyz/get/bridantbprov/tidak-puas")
    .then((r) => r.json())
    .then((data) => {
      theData.push(data.value);
      total += data.value;
    });

  return { theData, total };
};
