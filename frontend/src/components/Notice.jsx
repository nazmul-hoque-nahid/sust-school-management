import React, { useState } from 'react'
import { Calendar } from 'lucide-react'

const Notice = ({ notice }) => {
  const [expanded, setExpanded] = useState(false)

  const excerpt = notice.fullContent.split(' ').slice(0, 25).join(' ') + '...'

  const handleAttachment = () => {
    if (notice.attachmentUrl) {
      const newWindow = window.open(notice.attachmentUrl, '_blank')
      if (newWindow) newWindow.opener = null
    }
  }

  return (
    <article className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-300/20 transition hover:-translate-y-1 hover:shadow-xl'>
      <div className='flex items-center gap-3 text-slate-600'>
        <Calendar className='w-5 h-5' />
        <span className='text-sm font-medium'>{notice.date}</span>
      </div>

      {!expanded && (
        <p className='mt-5 text-slate-700 leading-7'>{excerpt}</p>
      )}

      <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <button
          type='button'
          onClick={() => setExpanded((current) => !current)}
          className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700'
        >
          {expanded ? 'Hide Details' : 'Read More'}
        </button>
      </div>

      {expanded && (
        <div className='mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <p className='text-slate-700 leading-7'>{notice.fullContent}</p>
          <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <button
              type='button'
              onClick={handleAttachment}
              disabled={!notice.attachmentUrl}
              className='inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400'
            >
              View Attachment
            </button>
            {!notice.attachmentUrl && <p className='text-sm text-slate-500'>No attachment available</p>}
          </div>
        </div>
      )}
    </article>
  )
}

export default Notice