import React, { useMemo, useState } from "react";
import "../App.css";
import { AxisOptions, Chart } from "react-charts";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function Task3() {
  type DailyValue = {
    date: Date;
    value: number;
  };

  type Series = {
    label: string;
    data: DailyValue[];
  };

  function makeSeries() {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 5);
    startDate.setFullYear(2022);
    startDate.setUTCHours(0);
    startDate.setUTCMinutes(0);
    startDate.setUTCSeconds(0);
    startDate.setUTCMilliseconds(0);

    const min = 80000;
    const max = 150000;
    const invterval = 5;
    const data = [];
    let tempDate = moment(startDate);
    while (moment(tempDate).isBefore(moment())) {
      const y = min + Math.round(Math.random() * (max - min));
      data.push({
        date: tempDate.toDate(),
        value: y,
      });
      tempDate = moment(tempDate).add(invterval, "days");
    }
    return data;
  }

  const initData = useMemo(() => makeSeries(), []);

  const [data, setData] = useState<Series[]>([
    {
      label: "Users who did vote",
      data: initData,
    },
  ]);

  const onChangeRange = (value: string) => {
    const startDate = moment().subtract(value, "days");
    const newData = [...initData].filter((item) => {
      return moment(item.date).isAfter(startDate);
    });
    setData([
      {
        label: "Users who did vote",
        data: newData,
      },
    ]);
  };

  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyValue> => ({
      getValue: (datum) => datum.date,
      formatters: {
        scale: (date: Date) => {
          return moment(date).format("MMM DD");
        },
        tooltip: (date: Date) => {
          return moment(date).format("MMM DD YYYY, dddd");
        },
      },
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyValue>[] => [
      {
        getValue: (datum) => datum.value,
        formatters: {
          scale: (value: number) => {
            return (value / 1000).toFixed(0) + "k";
          },
          tooltip: (value: number) => {
            return (value / 1000).toFixed(1) + "k";
          },
        },
      },
    ],
    []
  );

  return (
    <div className="rounded-[60px] overflow-hidden ">
      <section className="flex flex-col p-12 bg-comparative-primary">
        <div className="container mx-auto ">
          <h1 className="text-white text-3xl font-bold mb-2">
            Time-series graph
          </h1>

          <div className="rounded-xl bg-white w-full h-[300px]">
            <div className="flex flex-wrap items-center gap-4 absolute top-0 text-sm right-0 text-comparative-secondary p-2 px-4 z-10">
              Last:
              {[30, 90, 120].map((days, index) => (
                <div className="flex items-center" key={`range_${index}`}>
                  {days}d
                  <input
                    type="radio"
                    value={days}
                    name="range"
                    className="ml-1"
                    onChange={(e) => onChangeRange(e.target.value)}
                  />
                </div>
              ))}
              
              <div className="relative flex flex-col items-center group">
                <FontAwesomeIcon icon={faCircleQuestion} className="hover:cursor-pointer" />
                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                  <div className="relative z-10 p-2 text-sm text-white whitespace-no-wrap bg-black shadow-lg w-[240px] rounded-lg">
                    A time series chart, also called a times series graph or time series plot, is a data visualization tool.
                  </div>
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
              <div className="relative flex flex-col items-center group">
                <FontAwesomeIcon icon={faDownload} className="hover:cursor-pointer" />
                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                  <div className="relative z-10 p-2 text-sm text-white whitespace-no-wrap bg-black shadow-lg whitespace-nowrap rounded-lg">
                    download png
                  </div>
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
            </div>
            <Chart
              options={{
                data,
                padding: {
                  left: 20,
                  right: 20,
                  top: 50,
                  bottom: 20,
                },
                primaryAxis,
                secondaryAxes,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Task3;
