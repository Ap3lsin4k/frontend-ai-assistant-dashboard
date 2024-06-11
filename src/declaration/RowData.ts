export interface RowDataType {
  date: string;
  number: string;
  threat: number;
  group: "allowed_list" | "trusted_group" | "stranger";
  status: "finished" | "active";
  transcript: [
    {
      from_: string;
      content: string;
    },
  ];
  audio: string | undefined;
}
