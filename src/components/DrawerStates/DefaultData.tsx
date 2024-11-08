import React from "react";

export const DefaultData = () => {
    return (
        <React.Fragment>
            <div className="w-full flex items-center justify-center p-4 mb-4">
                <h2 className="text-2xl font-medium text-zinc-50 tracking-tighter leading-none">No filters selected, showing no results.</h2>
            </div>
            <div className="flex items-center justify-between" >
                <button className="mb-4 w-full py-2 h-16 bg-zinc-950 text-zinc-200 ring-1 ring-zinc-800/50 bg-center rounded-lg">
                    <p className="font-medium text-center flex items-center justify-center gap-3 text-2xl">
                        Another Action
                    </p>
                </button>
            </div>
        </React.Fragment>
    )
};