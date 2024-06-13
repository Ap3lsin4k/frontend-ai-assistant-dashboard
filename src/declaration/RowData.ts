export interface RowDataType {
  date: string;
  number: string;
  threat: number;
  group: "allowed_list" | "trusted_group" | "unknown";
  status: "finished" | "active";
  transcript: [
    {
      from_: string;
      content: string;
    },
  ];
  audio: string | undefined;
}
