import React from 'react'

const DashboardCard = ({ children, styles }) => {
  return (
    <article className={`p-6 rounded-lg shadow-md border glass-bg ${styles}`}>
        { children }
    </article>
  )
}

export default DashboardCard