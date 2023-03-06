import React from 'react'

const Entry = props => {
  if (props.rank === 1) {
    return (
      <tr className="border-b bg-amber-300">
        <td
          className="px-6 py-4 text-center whitespace-nowrap font-lexend text-gray-900 md:text-lg sm:text-sm">{props.rank}</td>
        <td
          className="text-gray-900 text-center font-lexend px-6 py-4 whitespace-nowrap md:text-lg sm:text-sm">{props.name}</td>
        <td
          className="text-gray-900 text-center font-lexend px-6 py-4 whitespace-nowrap md:text-lg sm:text-sm">{props.amount}</td>
      </tr>
    )
  } else if (props.rank === 2) {
    return (
      <tr className="border-b bg-stone-400">
        <td
          className="px-6 py-4 whitespace-nowrap text-center font-lexend text-gray-900 md:text-lg sm:text-base">{props.rank}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-lg sm:text-base">{props.name}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-lg sm:text-base">{props.amount}</td>
      </tr>
    )
  } else if (props.rank === 3) {
    return (
      <tr className="border-b bg-orange-400">
        <td
          className="px-6 py-4 whitespace-nowrap text-center font-lexend text-gray-900 md:text-lg sm:text-base">{props.rank}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-lg sm:text-base">{props.name}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-lg sm:text-base">{props.amount}</td>
      </tr>
    )
  } else {
    return (
      <tr className="bg-sky-50 border-b">
        <td
          className="px-6 py-4 whitespace-nowrap text-center font-lexend text-gray-900 md:text-base sm:text-sm">{props.rank}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-base sm:text-sm">{props.name}</td>
        <td
          className="text-gray-900 font-lexend text-center px-6 py-4 whitespace-nowrap md:text-base sm:text-sm">{props.amount}</td>
      </tr>
    )
  }
}
export default Entry
