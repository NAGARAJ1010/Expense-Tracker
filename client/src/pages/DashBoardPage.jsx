import React from "react";
import ExpenseCard from "../components/ExpenseCard";
import StatCard from "../components/StatCard";
import Menu from "../components/Menu";

const DashBoardPage = () => {
  return (
    <div className="dashboard flex flex-col gap-4 items-center relative h-full max-w-[80rem] mx-auto">
      <div className="w-full text-start bg-(--primary-color) p-4 text-white">
        <p className="">Good Morning,</p>
        <p className="text-2xl capitalize">Nagaraj Ganesan</p>
      </div>
      <div className="flex w-full md:py-4 md:px-8 gap-4">
        <div className="flex-1 menu-md-screen">
          <Menu />
        </div>
        <div className="flex-1 md:flex-2">
          <div className="flex gap-4 w-full justify-center px-4">
            <StatCard />
            <StatCard title="balance" />
          </div>
          <div className="flex flex-col gap-2 w-full px-4">
            <p className="text-end">Show All</p>
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
            <ExpenseCard />
          </div>
        </div>
      </div>

      <div className="sticky w-full bottom-0 md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default DashBoardPage;
