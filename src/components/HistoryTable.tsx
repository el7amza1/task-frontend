import React from 'react'

function HistoryTable() {
    return (
        <div className=' box-shadow result '>
            <div className='grid resultGrid gap-1 radius-top hidden'>
                <div className="grid-col-7 grid gap-2 bg-dark bold ">
                    <div className='bg-Orang p-5'>Valid</div>
                    <div className='bg-Orang p-5'>Local Format</div>
                    <div className='bg-Orang p-5'>Intl. Format</div>
                    <div className='bg-Orang p-5'>Location</div>
                    <div className='bg-Orang p-5'>Country</div>
                    <div className='bg-Orang p-5'>Carrier</div>
                    <div className='bg-Orang p-5'>Line Type</div>
                </div>
                <div className="grid-col-7 grid gap-1">
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                    <div className='bg-dark p-5'>h</div>
                </div>
                
            </div>
        </div>
    )
}

export default HistoryTable
