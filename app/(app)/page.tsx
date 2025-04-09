"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { Page } from "@/components/page"

import data from "./data.json"

export default function Home() {
  return (
    <Page title="Dashboard">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCards />
          <ChartAreaInteractive />
          <DataTable data={data} />
        </div>
      </div>
    </Page>
  )
} 
