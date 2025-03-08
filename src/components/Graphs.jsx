import React from 'react'
import AllTransactions from './dashboardComponents/allTransactionsComponent/AllTransactions'
import Reports from './dashboardComponents/reportsComponent/Reports'
import Calendar from './dashboardComponents/calendarComponent/Calendar'
import Credit from './dashboardComponents/creditCardComponent/Credit'
import Investments from './dashboardComponents/investmentComponents/Investments'
import Budget from './dashboardComponents/budgetComponent/Budget'
import Business from './dashboardComponents/businessComponent/Business'
import Retirement from './dashboardComponents/retirementComponent/Retirement'

const Graphs = () => {
  return (
    <div className='h-[100%] grid grid-cols-3 gap-4 grid-flow-row-dense'>
        <AllTransactions />
        <Reports />
        <Calendar />
        <Credit />
        <Investments />
        <Budget styles='row-span-2' />
        <Business />
        <Retirement />
    </div>
  )
}

export default Graphs