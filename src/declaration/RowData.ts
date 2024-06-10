export interface RowDataType {
  date: string;
  number: string;
  threat: number;
  group: "Allowed list" | null;
  status: "finished" | "active";
  transcript: [
    {
      from_: string;
      content: string;
    },
  ];
  audio: string | undefined;
}
