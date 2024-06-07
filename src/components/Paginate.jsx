import React from 'react';

function Paginate({ active: a, total: t, changePage }) {
    const active = parseInt(a);
    const total = parseInt(t);
    const range = 2;
    let first = Math.max(active - range, 1);
    let last = Math.min(parseInt(active) + range, total);

    if (last - first < 4) {
        if (first === 1) {
            last = Math.min(5, total);
        } else if (last === total) {
            first = Math.max(total - 4, 1);
        }
    }

    const pages = [];
    for (let i = first; i <= last; i++) {
        pages.push(i);
    }

    return (
        <section className="md:2-6/12 w-10/12 mx-auto text-center py-5">
            <button
                className={`inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1 ${active === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                title="Previous"
                onClick={() => changePage(active - 1)}
            >
                &lt;
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={`inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1 ${page === active ? 'bg-indigo-500' : ''}`}
                    onClick={() => changePage(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1 ${active === total ? 'cursor-not-allowed opacity-50' : ''}`}
                title="Next"
                onClick={() => changePage(active + 1)}
            >
                &gt;
            </button>
        </section>
    );
}

export default Paginate;
