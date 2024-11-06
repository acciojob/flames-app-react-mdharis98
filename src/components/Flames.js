// import React, { useState } from "react";
// const Flames = () => {
//     const [name1, setName1] = useState("");
//     const [name2, setName2] = useState("");
//     const [answere, setAnswere] = useState("");
//     const getRemainingLength = (n1, n2) => {
//         let arr1 = n1.split("");
//         let arr2 = n2.split("");
//         for (let i = 0; i < arr1.length; i++) {
//             let idx = arr2.indexOf(arr1[i]);
//             if (idx !== -1) {
//                 arr1.splice(i, 1);
//                 arr2.splice(idx, 1);
//                 i--;
//             }
//         };
//         return arr1.length + arr2.length;
//     }
//     const handleCalculateRelation = (event) => {
//         event.preventDefault();
//         if (!name1.trim() || !name2.trim()) {
//             alert("Please Enter valid input");
//             return;
//         }
//         const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
//         const remainingLength = getRemainingLength(name1, name2);
//         const resultIdx = remainingLength % 6;
//         setAnswere(flames[resultIdx]);
//     }
//     const handleClear = (event) => {
//         event.preventDefault();
//         setName1("");
//         setName2("");
//         setAnswere("");
//     }
//     return (
//         <div>
//             <h1>FLAMES GAME</h1>
//             <form>
//                 <input type="text" name="name1" data-testid="input1" value={name1} onChange={(event) => setName1(event.target.value)}/>
//                 <input type="text" name="name2" data-testid="input2" value={name2} onChange={(event) => setName2(event.target.value)}/>
//                 <button data-testid="calculate_relationship" onClick={handleCalculateRelation}>Calculate Relationship Future</button>
//                 <button data-testid="clear" onClick={handleClear}>Clear</button>
//             </form>
//             <h3 data-testid="answer">{answere.length > 0 && `${answere}`}</h3>
//         </div>
//     )
// }

// export default Flames;

import React, { useState } from "react";

const Flames = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [answere, setAnswere] = useState("");

    const getRemainingLength = (n1, n2) => {
        let arr1 = n1.split("");
        let arr2 = n2.split("");
        for (let i = 0; i < arr1.length; i++) {
            let idx = arr2.indexOf(arr1[i]);
            if (idx !== -1) {
                arr1.splice(i, 1);
                arr2.splice(idx, 1);
                i--;
            }
        };
        return arr1.length + arr2.length;
    };

    const handleCalculateRelation = (event) => {
        event.preventDefault();
        if (!name1.trim() || !name2.trim()) {
            alert("Please Enter valid input");
            return;
        }
        const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
        const remainingLength = getRemainingLength(name1, name2);
        const resultIdx = remainingLength % flames.length;
        setAnswere(flames[resultIdx]);
    };

    const handleClear = (event) => {
        event.preventDefault();
        setName1("");
        setName2("");
        setAnswere("");
    };

    return (
        <div>
            <h1>FLAMES GAME</h1>
            <div> {/* Removed form tag */}
                <input 
                    type="text" 
                    name="name1" 
                    data-testid="input1" 
                    value={name1} 
                    onChange={(event) => setName1(event.target.value)}
                />
                <input 
                    type="text" 
                    name="name2" 
                    data-testid="input2" 
                    value={name2} 
                    onChange={(event) => setName2(event.target.value)}
                />
                <button 
                    data-testid="calculate_relationship" 
                    onClick={handleCalculateRelation}
                >
                    Calculate Relationship Future
                </button>
                <button 
                    data-testid="clear" 
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <h3 data-testid="answer">{answere.length > 0 && answere}</h3>
        </div>
    );
};

export default Flames;
