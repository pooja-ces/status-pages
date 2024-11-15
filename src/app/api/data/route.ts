import { NextResponse } from "next/server";
import { getServices } from "@/providers/apiData/getServices";
import { getExternalServices } from "@/providers/apiData/getExternalServices";
import { getChartData, getMetrics } from "@/providers/apiData/getMetrics";
import { getVersion } from "@/providers/apiData/getVersion";
import { getIncidents } from "@/providers/apiData/getIncidents";
import { getHistoryData } from "@/providers/apiData/getHistoryData";


export async function GET() {
  try {
    // Fetch all data
    const services = await getServices();
    const externalServices = await getExternalServices();
    const metrics = await getMetrics();
    const chartData = await getChartData();
    const versionData = await getVersion();
    const incidentsData = await getIncidents();
    const historyData = await getHistoryData();
    

    // Return the data in the response
    return NextResponse.json({
      services,
      externalServices,
      metrics,
      chartData,
      versionData,
      incidentsData,
      historyData,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error }, { status: 500 });
  }
}
