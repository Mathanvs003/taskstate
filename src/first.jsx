import { useState } from "react";

function Back() {
    const list=["one","two","three"];
    const [step,setStep]=useState(1);
    const [val,setValue]=useState("one");

    const previous = () => {
        console.log("beforeeeeeeee", step);
        const newStep= step>1?step-1:step;
        setStep(newStep);
        setValue(list[newStep-1]);
        console.log("---------------------------", list[newStep - 1], newStep);
    };

    const next = () => {
        console.log("beforeeeeeeee", step);
        const newStep = step<3?step+1:step;
        setStep(newStep);
        setValue(list[newStep-1]);
        console.log("+++++++++++++++++++++++++++",list[newStep-1],newStep);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="h-3/4 w-2/4 bg-sky-50 flex justify-evenly pt-10">
                <button className="bg-indigo-600 h-10 w-10 rounded-3xl text-white">1</button>
                <button className={`${step === 2 || step === 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 '} h-10 w-10 rounded-3xl`}>2</button>
                <button className={`${step === 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200'} h-10 w-10 rounded-3xl`}>3</button>
            </div>
            <div className="absolute bottom-72">
                <h1 className="text-5xl">{val}</h1>
            </div>
            <div className="flex items-center space-x-72 absolute bottom-32 pr-1">
                <button className="bg-indigo-600 h-10 w-24 font-bold text-white rounded-3xl" onClick={previous}>previous</button>
                <button className="bg-indigo-600 h-10 w-24 font-bold text-white rounded-3xl" onClick={next}>next</button>
            </div>
        </div>
    );
}

export default Back;