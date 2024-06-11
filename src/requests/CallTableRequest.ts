import { RowDataType } from "@/declaration/RowData";

export const getCallsHistory = async () => {
  try {
    const res = await fetch(
      "https://prototypebe.mavn.ai:7000/api/conversations/",
      {
        cache: "no-store",
      },
    );

    const data = await res.json();

    const rowData: RowDataType[] = data.map((call: any) => ({
      date: call.timestamp,
      number: call.from_,
      threat: call.threat,
      group: call.group,
      status: call.status,
      transcript: call.messages,
      audio: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.aac", // TODO!: change here to audio from data
    }));

    return rowData;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const addNumberToAllowed = async (number: string) => {
  try {
    const res = await fetch(
      "https://prototypebe.mavn.ai:7000/api/settings/allowed_list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: number,
        }),
      },
    );
    return await res.json();
  } catch (error) {
    console.error("Error during fetch:", error);
    return;
  }
};

export const addNumberToTrusted = async (number: string) => {
  try {
    const res = await fetch(
      "https://prototypebe.mavn.ai:7000/api/settings/trusted_group",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: number,
        }),
      },
    );
    return await res.json();
  } catch (error) {
    console.error("Error during fetch:", error);
    return;
  }
};
