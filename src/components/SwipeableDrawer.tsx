import { useEffect, useState, useRef } from 'react';
import { clsx } from 'clsx';
import { Drawer } from 'vaul';

export const SwipeableDrawer: React.FC = () => {

    const [snap, setSnap] = useState<number | string | null>('140px'); // Default snap point
    const [snapPoints, setSnapPoints] = useState<(number | string)[]>(['140px', '355px', 1]); // Default snap points

    /**
     * Set the initial view reference to measure the height of the initial view
     */
    const initialViewRef = useRef<HTMLDivElement | null>(null);

    /**
     * Add a drawer handle offset to the snap point
     */
    const drawerHandleOffset: number = 50;

    // Measure the height of the "inViewInitially" element and set snap points
    useEffect(() => {
        // Defer execution to ensure the DOM is fully loaded
        setTimeout(() => {
            if (initialViewRef.current) {
                const height = initialViewRef.current.offsetHeight + drawerHandleOffset;
                setSnapPoints([`${height}px`, '355px', 1]);
                setSnap(`${height}px`);
            }
        }, 0); // The delay can be minimal (0 ms) to wait for the DOM update
    }, []);

    const [showResults, setShowResults] = useState(false);

    const getResults = () => {
        console.log('Results');
        // switch to the next snap point
        setSnap('355px');
        // set the state to show the results
        setShowResults(true);
    };

    const resetResults = () => {
        console.log('Reset');
        // switch to the initial snap point
        if (initialViewRef.current) {
            setSnap(`${initialViewRef.current?.offsetHeight + drawerHandleOffset}px`);
        }
        // set the state to hide the results
        setShowResults(false);
    }

    return (
        <Drawer.Root snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap} defaultOpen={true} dismissible={false}>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Portal>
                <Drawer.Content
                    className="fixed flex flex-col bg-zinc-900 border border-zinc-700/50 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                    <Drawer.Handle className="mt-2" />
                    <div
                        className={clsx('flex flex-col mx-auto w-full py-4 pt-5', {
                            'overflow-y-auto': snap === 1,
                            'overflow-hidden': snap !== 1,
                        })}>
                        <div className="px-4 flex flex-col justify-between overflow-auto no-scrollbar min-h-full">
                            <div ref={initialViewRef}>
                                <div className="flex items-center justify-between">
                                    <Drawer.Title className="mb-4 text-4xl font-bold leading-none tracking-tighter text-zinc-50">Page Title</Drawer.Title>
                                    <Drawer.Description />
                                    <button className="text-md text-right text-zinc-200 font-light leading-none cursor-pointer" aria-label="Reset filters" onClick={resetResults}>Reset filters</button>
                                </div>
                                <div className="overflow-y-auto no-scrollbar flex gap-2 pb-4">
                                    <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap text-small rounded-xl bg-transparent text-default-foreground px-4 py-1 m-1 select-none bg-zinc-800 ring-1 ring-zinc-700 text-zinc-50">
                                        <button className="flex-1 text-lg font-normal px-2" onClick={getResults}>Filter Option 1</button>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-y-auto no-scrollbar flex m-1 gap-2 mb-4">
                                <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap h-7 text-small rounded-medium bg-transparent text-default-foreground p-2 select-none transition duration-100 cursor-pointer bg-zinc-800 text-zinc-50 rounded-md">
                                    <span className="flex-1 text-inherit font-normal px-2">Sub-Filter 1</span>
                                </div>
                                <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap h-7 text-small rounded-medium bg-transparent text-default-foreground p-2 select-none transition duration-100 cursor-pointer bg-zinc-800 text-zinc-50 rounded-md">
                                    <span className="flex-1 text-inherit font-normal px-2">Sub-Filter 2</span>
                                </div>
                                <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap h-7 text-small rounded-medium bg-transparent text-default-foreground p-2 select-none transition duration-100 cursor-pointer bg-zinc-800 text-zinc-50 rounded-md">
                                    <span className="flex-1 text-inherit font-normal px-2">Sub-Filter 3</span>
                                </div>
                                <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap h-7 text-small rounded-medium bg-transparent text-default-foreground p-2 select-none transition duration-100 cursor-pointer bg-zinc-800 text-zinc-50 rounded-md">
                                    <span className="flex-1 text-inherit font-normal px-2">Sub-Filter 4</span>
                                </div>
                            </div>
                            {!showResults && (
                                <div className="w-full flex items-center justify-center p-4 mb-4">
                                    <h2 className="text-2xl font-medium text-zinc-50 tracking-tighter leading-none">No filters selected, showing no results.</h2>
                                </div>
                            )}
                            {showResults && (
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
                            )}
                            <div className="flex items-center justify-between">
                                <button className="mb-4 w-full py-2 h-16 bg-zinc-950 text-zinc-200 ring-1 ring-zinc-800/50 bg-center rounded-lg">
                                    <p className="font-medium text-center flex items-center justify-center gap-3 text-2xl">
                                        Another Action
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}