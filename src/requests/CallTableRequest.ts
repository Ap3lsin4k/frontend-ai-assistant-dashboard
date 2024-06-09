import { RowDataType } from "@/declaration/RowData";

export const getCallsHistory = async () => {
  try {
    const res = await fetch("https://34.116.142.38/api/conversations/");

    const data = await res.json();

    const rowData: RowDataType[] = data.map((call: any) => ({
      date: call.timestamp,
      number: call.from_,
      threat: call.threat,
      group: "Allowed list", //  TODO!: change here to group from data
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
