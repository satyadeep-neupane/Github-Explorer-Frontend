import React from 'react'
import Markdown from "react-markdown";

function MarkdownSection({ markdown }) {
    return (
        <section className="text-white border-gray-400 border-x border-b rounded-b-lg py-3 px-4">
            <h3 className="text-2xl text-zinc-400 mb-2">Readme</h3>
            <hr className="mb-2" />
            <Markdown className="prose prose-slate dark:prose-invert lg:prose-sm">
                {markdown}
            </Markdown>

        </section>
    )
}

export default MarkdownSection