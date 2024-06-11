import "./page.scss";
import LiveCall from "@/app/calls/LiveCall/LiveCall";
import CallsTable from "@/app/calls/CallsTable/CallsTable";
import { getCallsHistory } from "@/requests/CallTableRequest";

export default async function Page() {
  const rowData = await getCallsHistory();

  const filteredRowData = rowData.filter((el) => el.status !== "active");

  return (
    <div className="calls-page">
      <h1>Incoming calls page</h1>
      <LiveCall />
      <CallsTable rowData={filteredRowData} />
    </div>
  );
}
