import "./page.scss";
import LiveCall from "@/app/calls/LiveCall/LiveCall";
import CallsTable from "@/app/calls/CallsTable/CallsTable";
import { getCallsHistory } from "@/requests/CallTableRequest";

export default async function Page() {
  const rowData = await getCallsHistory();

  const filteredRowData = rowData.filter((el) => el.status !== "active"); // TODO!: change to filtered

  return (
    <div className="calls-page">
      <LiveCall />
      <CallsTable rowData={rowData} />
    </div>
  );
}
