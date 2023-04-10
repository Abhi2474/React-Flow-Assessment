import React from 'react'

const Pagination = ({ page, pageCount }) => {

	const isNextDisabled = () => {
		return page >= pageCount
	}

	const isPrevDisabled = () => {
		return page <= 1
	}

	const handlePaginate = (direction) => {
		if (direction === 1 && isNextDisabled()) {
			return
		}
		if (direction === -1 && isPrevDisabled()) {
			return
		}
	}

	return (
		<div className='flex justify-between mx-auto '>
			<button onClick={() => handlePaginate(-1)} className={`rounded  w-24 font-bold text-white py-1 px-3 mr-4 text-center mb-10 ${isPrevDisabled() ? 'bg-green-200' : 'bg-green-400'}`}>Previous</button>
			<button onClick={() => handlePaginate(1)} className={`rounded  w-24 font-bold text-white py-1 px-3 mr-4 text-center mb-10 ${isNextDisabled() ? 'bg-green-200' : 'bg-green-400'}`}>Next</button>
		</div>
	)
}

export default Pagination