export const getLastCalls = async () => {
  try {
    const res = await fetch(
      "https://prototypebe.mavn.ai:7000/api/conversations/",
      {
        next: { revalidate: 1 },
      },
    );

    const data = await res.json();

    return data.map((call: any) => ({
      date: call.timestamp,
      number: call.from_,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
};
