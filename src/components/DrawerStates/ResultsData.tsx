import React from "react";

export const ResultsData = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col items-center justify-start gap-2 mb-10">
                <div className="w-full bg-zinc-800 ring-1 ring-zinc-600 rounded-md p-4">
                    <h3 className="text-2xl font-medium text-zinc-50">This is a search result</h3>
                    <p className="text-zinc-200">This is a search result description containing data about a facility.</p>
                </div>
                <div className="w-full bg-zinc-800 ring-1 ring-zinc-600 rounded-md p-4">
                    <h3 className="text-2xl font-medium text-zinc-50">This is a search result</h3>
                    <p className="text-zinc-200">This is a search result description containing data about a facility.</p>
                </div>
            </div>
        </React.Fragment>
    )
};