import React, { useEffect } from 'react'
import Entry from './entry'
import Papa from "papaparse";

const Leaderboard = props => {
  const [entries, setEntries] = React.useState([])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQkXi1rcLYNki-AD4JrZG8dtYg_-qNuiO1kUsIsGYt2TJeNbQpfyATaGupLBneFigMq5eNKgq3rJaSe/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data
        data.sort((a, b) => b.Donation - a.Donation)
        data.map((entry, i) => (entry.rank = i + 1))
        setEntries(data)
      },
    })
  }, [])

  return (
    <table className="mx-auto">
      <thead className="bg-sky-50 border-b">
        <tr>
          <th scope="col" className="font-lexend text-grey-900 px-6 py-4 text-center md:text-xl sm:text-lg">
            Rank
          </th>
          <th scope="col" className="font-lexend text-grey-900 px-6 py-4 text-center md:text-xl sm:text-lg">
            Name
          </th>
          <th scope="col" className="font-lexend text-grey-900 px-6 py-4 text-center md:text-xl sm:text-lg">
            Donation ($)
          </th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <Entry key={entry.rank} rank= {entry.rank} name={entry.Name} amount={entry.Donation} />
        ))}
      </tbody>
    </table>
  )
}
export default Leaderboard
