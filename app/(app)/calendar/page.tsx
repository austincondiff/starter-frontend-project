"use client";
import { Page, PageTab } from "@/components/page";
import { SchedulerProvider } from "./calendar-provider";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarDaysIcon, Columns3, Rows3, Plus } from "lucide-react";

import AddEventModal from "./components/add-event-modal";
import DailyView from "./components/daily-view";
import MonthView from "./components/month-view";
import WeeklyView from "./components/week-view";
import { useModal } from "@/lib/modal-context";
import { ClassNames, CustomComponents, Views } from "./types";
import CustomModal from "@/components/ui/custom-modal";

// Animation settings for Framer Motion
const animationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, type: "spring", stiffness: 250 },
};

export default function CalendarPage({
  views = {
    views: ["day", "week", "month"],
    mobileViews: ["day"],
  },
  stopDayEventSummary = false,
  CustomComponents,
  classNames,
}: {
  views?: Views;
  stopDayEventSummary?: boolean;
  CustomComponents?: CustomComponents;
  classNames?: ClassNames;
}) {
  const { setOpen } = useModal();
  const [activeView, setActiveView] = useState<string>("day");
  const [clientSide, setClientSide] = useState(false);

  console.log("activeView", activeView);

  useEffect(() => {
    setClientSide(true);
  }, []);

  const [isMobile, setIsMobile] = useState(
    clientSide ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (!clientSide) return;
    setIsMobile(window.innerWidth <= 768);
    function handleResize() {
      if (window && window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window && window.addEventListener("resize", handleResize);

    return () => window && window.removeEventListener("resize", handleResize);
  }, [clientSide]);

  function handleAddEvent(selectedDay?: number) {
    // Create the modal content with proper data
    const startDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      selectedDay ?? new Date().getDate(),
      0,
      0,
      0,
      0
    );

    const endDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      selectedDay ?? new Date().getDate(),
      23,
      59,
      59,
      999
    );

    // Create a wrapper component to handle data passing
    const ModalWrapper = () => {
      const title =
        CustomComponents?.CustomEventModal?.CustomAddEventModal?.title ||
        "Add Event";

      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
        </div>
      );
    };

    // Open the modal with the content
    setOpen(
      <CustomModal title="Add Event">
        <AddEventModal
          CustomAddEventModal={
            CustomComponents?.CustomEventModal?.CustomAddEventModal?.CustomForm
          }
        />{" "}
      </CustomModal>
    );
  }

  return (
    <SchedulerProvider>
      <Page title="All Events" largeTitle={false} renderActions={() => (
        <Button onClick={() => handleAddEvent()}>
          <Plus />
          Add Event
          </Button>
      )}>
        <PageTab value="day" label="Day" icon={Rows3}>
          <DailyView
            stopDayEventSummary={stopDayEventSummary}
            classNames={classNames?.buttons}
            prevButton={
              CustomComponents?.customButtons?.CustomPrevButton
            }
            nextButton={
              CustomComponents?.customButtons?.CustomNextButton
            }
            CustomEventComponent={
              CustomComponents?.CustomEventComponent
            }
            CustomEventModal={CustomComponents?.CustomEventModal}
          />
        </PageTab>
        <PageTab value="week" label="Week" icon={Columns3}>
          <WeeklyView
            classNames={classNames?.buttons}
            prevButton={
              CustomComponents?.customButtons?.CustomPrevButton
            }
            nextButton={
              CustomComponents?.customButtons?.CustomNextButton
            }
            CustomEventComponent={
              CustomComponents?.CustomEventComponent
            }
            CustomEventModal={CustomComponents?.CustomEventModal}
          />
        </PageTab>
        <PageTab value="month" label="Month" icon={CalendarDaysIcon}>
          <MonthView
            classNames={classNames?.buttons}
            prevButton={
              CustomComponents?.customButtons?.CustomPrevButton
            }
            nextButton={
              CustomComponents?.customButtons?.CustomNextButton
            }
            CustomEventComponent={
              CustomComponents?.CustomEventComponent
            }
            CustomEventModal={CustomComponents?.CustomEventModal}
          />
        </PageTab>
      </Page>
    </SchedulerProvider>
  );
}
