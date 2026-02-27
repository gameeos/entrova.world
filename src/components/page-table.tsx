"use client";
import { Input } from "./ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import React from "react";
import PageButton from "./page-button";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export interface PageTableRow {
  rowKey: string;
  values: Record<string, React.ReactNode>;
}

export interface PageTableProps {
  curPage?: number;
  totalPage?: number;
  header: { key: string; title: string }[];
  data?: PageTableRow[];
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  jumpTo: (pageNo: number) => void;
  minRows?: number;
  isLoading?: boolean;
}

export default function PageTable({
  header,
  data = [],
  curPage,
  totalPage,
  onPrevPageClick,
  onNextPageClick,
  jumpTo,
  minRows = 6,
  isLoading,
}: PageTableProps) {
  const headKeys = header.map((th) => th.key);

  const renderPlaceholderRow = () => {
    if (!data) return;
    if (data.length >= minRows) return;
    const required = minRows - data.length;
    const rows = [];
    for (let i = 0; i < required; i++) {
      rows.push(<TableRow className="h-9" key={i} />);
    }
    return rows;
  };

  const renderLoading = () => {
    const rows = [];
    rows.push(<TableRow key={-1} className="border-none h-1" />);
    for (let i = 0; i < minRows; i++) {
      rows.push(
        <TableRow key={i} className="relative h-9 border-none">
          <TableCell className="p-0">
            <Skeleton className="bg-[#18181b1a] absolute w-[calc(100%-16px)] h-6 top-1.5 left-2" />
          </TableCell>
        </TableRow>
      );
    }
    rows.push(<TableRow key={-2} className="border-none h-1" />);
    return rows;
  };

  return (
    <div className="border border-black rounded-[20px] py-1">
      <Table>
        <TableHeader>
          <TableRow>
            {header.map((th) => (
              <TableHead key={th.key}>{th.title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {!isLoading && data.length > 0 && (
          <TableBody>
            {data.map(({ rowKey, values }) => {
              const sorted = [];
              for (let i = 0; i < headKeys.length; i++) {
                const headKey = headKeys[i];
                const value = values[headKey];
                if (value === undefined) {
                  throw new Error(
                    `Unexpected undefined value of col key ${headKey} and row key ${rowKey}`
                  );
                }
                sorted.push(value);
              }
              return (
                <TableRow key={rowKey}>
                  {sorted.map((value, index) => (
                    <TableCell key={headKeys[index]}>{value}</TableCell>
                  ))}
                </TableRow>
              );
            })}
            {renderPlaceholderRow()}
          </TableBody>
        )}
        {isLoading && <TableBody>{renderLoading()}</TableBody>}
      </Table>
      {!isLoading && data.length === 0 && (
        <div className="h-[240px] flex flex-col justify-center items-center gap-4">
          <Image
            className="w-[70px] h-[92px]"
            src="/images/invite-friends/no-data-icon.svg"
            alt="No Data"
            width={140}
            height={184}
          />
          <p className="text-[#AAA6C5] font-medium">No Data</p>
        </div>
      )}
      <div className="border-t-[0.5px] border-[#201E2C] py-3 sm:py-6 lg:py-9">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          <PageButton
            type="prev"
            disabled={!curPage || curPage === 1}
            onClick={onPrevPageClick}
          />
          <div className="flex justify-center items-center gap-3">
            <Input
              defaultValue={curPage}
              className="border border-black w-12 h-8"
              type="tel"
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                const value = event.currentTarget.value;
                const num = parseInt(value);
                if (!Number.isSafeInteger(num)) return;
                if (num === curPage) return;
                if (num < 1) return;
                if (!totalPage) return;
                if (num > totalPage) return;
                jumpTo(num);
              }}
            />
            <span>of</span>
            <span>{totalPage}</span>
          </div>
          <PageButton
            onClick={onNextPageClick}
            type="next"
            disabled={!curPage || !totalPage || curPage === totalPage}
          />
        </div>
      </div>
    </div>
  );
}
