import React, { useState, useEffect, useReducer } from "react";
import './AdminHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Student() {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/cStudentInfo`)
            .then(response => {
                setStudentData(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);
    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
            }).catch(err => console.log(err));
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "SORT":
                return { ...state, sortBy: action.payload };
            case "FILTER":
                switch (action.payload) {
                    case "CSE":
                        return { ...state, CSE: !state.CSE };
                    case "CIV":
                        return { ...state, CIV: !state.CIV };
                    case "MEC":
                        return {
                            ...state,
                            MEC: !state.MEC
                        };
                    case "ECE":
                        return { ...state, ECE: !state.ECE };
                    case "EEE":
                        return { ...state, EEE: !state.EEE };
                    default:
                        console.log("inner switch is acting up...");
                        break;
                }
                break;
            case "YEAR":
                switch (action.payload) {
                    case "YEAR2024":
                        return { ...state, YEAR2024: !state.YEAR2024 };
                    case "YEAR2025":
                        return { ...state, YEAR2025: !state.YEAR2025 };
                    case "YEAR2026":
                        return {
                            ...state,
                            YEAR2026: !state.YEAR2026
                        };
                    default:
                        console.log("inner switch is acting up...");
                        break;
                }
                break;
                case "BACKLOG":
                switch (action.payload) {
                    case "YES":
                        return { ...state, YES: !state.YES };
                    case "NO":
                        return { ...state, NO: !state.NO };

                    default:
                        console.log("inner switch is acting up...");
                        break;
                }
                break;


            case "DROPPER":
                switch (action.payload) {
                    case "DYES":
                        return { ...state, DYES: !state.DYES };
                    case "DNO":
                        return { ...state, DNO: !state.DNO };

                    default:
                        console.log("inner switch is acting up...");
                        break;
                }
                break;


            case "GENDER":
                switch (action.payload) {
                    case "MALE":
                        return { ...state, MALE: !state.MALE };
                    case "FEMALE":
                        return { ...state, FEMALE: !state.FEMALE };

                    default:
                        console.log("inner switch is acting up...");
                        break;
                }
                break;


            case "TOGGLE_FILTER_OPTIONS":
                return { ...state, showFilterOptions: !state.showFilterOptions };


            default:
                console.log("something is wrong with reducer function");
                break;
        }
    };


    
    const [
        { sortBy, CSE, CIV, MEC, ECE, EEE, YEAR2024, YEAR2025, YEAR2026, YES, NO, DYES, DNO, MALE, FEMALE, showFilterOptions },
        dispatch
    ] = useReducer(reducer, {
        sortBy: "none",
        CSE: false,
        CIV: false,
        MEC: false,
        ECE: false,
        EEE: false,
        YEAR2024: false,
        YEAR2025: false,
        YEAR2026: false,
        YES: false,
        NO: false,
        DYES: false,
        DNO: false,
        MALE: false,
        FEMALE: false,
        showFilterOptions: false,
    });





    const getDeliveryFilteredData = (prodArr, CIV) => {

        switch (CIV) {
            case true:
                const bufferArr = [...prodArr];
                return bufferArr.filter((item) => item.branch === "CIV");
            case false:
                return prodArr;
            default:
                console.log("delivery filter is broken...");
                break;
        }
    };


    const getFilteredDataByBranch = (
        prodArr,
        CSE,
        CIV,
        MEC,
        ECE,
        EEE
    ) => {
        const bufferArr = prodArr;

        // If all branches are deselected, return bufferArr
        if (!CSE && !MEC && !ECE && !CIV && !EEE) {
            return bufferArr;
        }

        // Filter based on selected branches
        return bufferArr.filter((item) => {
            // Create an array to hold selected branches
            const selectedBranches = [];

            // Push selected branches to the array
            if (CSE) selectedBranches.push("CSE");
            if (MEC) selectedBranches.push("MEC");
            if (ECE) selectedBranches.push("ECE");
            if (CIV) selectedBranches.push("CIV");
            if (EEE) selectedBranches.push("EEE");

            // Check if the item's branch is included in the selected branches
            return selectedBranches.includes(item.branch);
        });
    };



    const getSortedData = (prodArr, sortBy) => {
        switch (sortBy) {
            case "CGPA_LOW_TO_HIGH":
                return prodArr.sort((a, b) => a.cgpa - b.cgpa);

            case "CGPA_HIGH_TO_LOW":
                return prodArr.sort((a, b) => b.cgpa - a.cgpa);

            case "none":
                return prodArr;

            default:
                console.log("something is wrong with getSortedData...");
                return prodArr;
        }
    };

    const getFilteredDataByYear = (
        prodArr,
        YEAR2024,
        YEAR2025,
        YEAR2026
    ) => {
        const bufferArr = prodArr;

        // If all branches are deselected, return bufferArr
        if (!YEAR2024 && !YEAR2025 && !YEAR2026) {
            return bufferArr;
        }

        // Filter based on selected branches
        return bufferArr.filter((item) => {
            // Create an array to hold selected branches
            const selectedYear = [];

            // Push selected branches to the array
            if (YEAR2024) selectedYear.push(2024);
            if (YEAR2025) selectedYear.push(2025);
            if (YEAR2026) selectedYear.push(2026);

            // Check if the item's branch is included in the selected branches
            return selectedYear.includes(item.graduationYear);
        });

    }
    const getFilteredDataByBacklog = (prodArr, YES, NO) => {
        const bufferArr = prodArr;

        // If all branches are deselected, return bufferArr
        if (!YES && !NO) {
            return bufferArr;
        }

        // Filter based on selected branches
        return bufferArr.filter((item) => {
            // Create an array to hold selected branches
            const selectedData = [];

            // Push selected branches to the array
            if (YES) selectedData.push("Yes");
            if (NO) selectedData.push("No");


            // Check if the item's branch is included in the selected branches
            return selectedData.includes(item.backlog);
        });
    };

    const getFilteredDataDropper = (prodArr, DYES, DNO) => {
        const bufferArr = prodArr;

        // If all branches are deselected, return bufferArr
        if (!DYES && !DNO) {
            return bufferArr;
        }

        // Filter based on selected branches
        return bufferArr.filter((item) => {
            // Create an array to hold selected branches
            const selectedData = [];

            // Push selected branches to the array
            if (DYES) selectedData.push("Yes");
            if (DNO) selectedData.push("No");


            // Check if the item's branch is included in the selected branches
            return selectedData.includes(item.dropper);
        });
    };

    const getFilteredDataByGender = (prodArr, MALE, FEMALE) => {
        const bufferArr = prodArr;

        // If all branches are deselected, return bufferArr
        if (!MALE && !FEMALE) {
            return bufferArr;
        }

        // Filter based on selected branches
        return bufferArr.filter((item) => {
            // Create an array to hold selected branches
            const selectedData = [];

            // Push selected branches to the array
            if (MALE) selectedData.push("Male");
            if (FEMALE) selectedData.push("Female");


            // Check if the item's branch is included in the selected branches
            return selectedData.includes(item.gender);
        });
    };
    const sortedData = getSortedData(studentData, sortBy);
    const filteredDataByBranch = getFilteredDataByBranch(
        sortedData,
        CSE,
        CIV,
        MEC,
        ECE,
        EEE
    );
  
    const filteredDataByYear = getFilteredDataByYear(
        filteredDataByBranch,
        YEAR2024,
        YEAR2025,
        YEAR2026
    );
    const filteredDataByBacklog = getFilteredDataByBacklog(
        filteredDataByYear,
        YES,
        NO
    );
    const filteredDataDropper = getFilteredDataDropper(
        filteredDataByBacklog,
        DYES,
        DNO
    );
    const filteredDataByGender = getFilteredDataByGender(
        filteredDataDropper,
        MALE,
        FEMALE
    );
    const filteredData = filteredDataByGender;

    return (
        <div>
            <div className='SH1'>
                <div className='SH2'>
                    <Link to="/" className='SH3'>Home</Link>
                </div>
                <div className='SH2'>
                    <Link to="/studenthome" className='SH3'>Profile</Link>
                </div>
                <div className='SH2'>
                    <Link to="/student" className='SH3'>Student</Link></div>
                <div className='SH2'>
                    <Link to="/company" className='SH3'>Companies</Link></div>
                <div className='SH2'>
                    <Link to="/admin" className='SH3'>Admin</Link></div>
                <div className='SH2'>
                    <Link to="/aopening" className='SH3'>Openings</Link></div>
                <div className='SH2' >
                    <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link></div>
            </div>
            <div classname='SHN'>

            <div >
                <button onClick={() => dispatch({ type: "TOGGLE_FILTER_OPTIONS" })}>Apply Filter</button>
                {showFilterOptions && (
                    <div>
                        <fieldset>
                            <legend>sort by:</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="sort"
                                    onChange={() =>
                                        dispatch({ type: "SORT", payload: "CGPA_LOW_TO_HIGH" })
                                    }
                                    checked={sortBy && sortBy === "CGPA_LOW_TO_HIGH"}
                                />
                                cgpa - low to high
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="sort"
                                    onChange={() =>
                                        dispatch({ type: "SORT", payload: "CGPA_HIGH_TO_LOW" })
                                    }
                                    checked={sortBy && sortBy === "CGPA_HIGH_TO_LOW"}
                                />
                                cgpa - high to low
                            </label>

                        </fieldset>
                        <fieldset>
                            <legend>Filter:</legend>
                            <legend>Branch:</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="filter"
                                    onChange={() =>
                                        dispatch({ type: "FILTER", payload: "CSE" })
                                    }
                                    checked={CSE}
                                />
                                CSE
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="filter"
                                    onChange={() =>
                                        dispatch({ type: "FILTER", payload: "MEC" })
                                    }
                                    checked={MEC}
                                />
                                MEC
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="filter"
                                    onChange={() =>
                                        dispatch({ type: "FILTER", payload: "CIV" })
                                    }
                                    checked={CIV}
                                />
                                CIV
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name="filter"
                                    onChange={() =>
                                        dispatch({ type: "FILTER", payload: "ECE" })
                                    }
                                    checked={ECE}
                                />
                                ECE
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="filter"
                                    onChange={() =>
                                        dispatch({ type: "FILTER", payload: "EEE" })
                                    }
                                    checked={EEE}
                                />
                                EEE
                            </label>

                        </fieldset>


                        <fieldset>
                            <legend>Graduation Year:</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="year"
                                    onChange={() =>
                                        dispatch({ type: "YEAR", payload: "YEAR2024" })
                                    }
                                    checked={YEAR2024}
                                />
                                2024
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="year"
                                    onChange={() =>
                                        dispatch({ type: "YEAR", payload: "YEAR2025" })
                                    }
                                    checked={YEAR2025}
                                />
                                2025
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="year"
                                    onChange={() =>
                                        dispatch({ type: "YEAR", payload: "YEAR2026" })
                                    }
                                    checked={YEAR2026}
                                />
                                2026
                            </label>

                        </fieldset>
<fieldset>
                            <legend>Backlog:</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="backlog"
                                    onChange={() => dispatch({ type: "BACKLOG", payload: "YES" })}
                                    checked={YES}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="backlog"
                                    onChange={() => dispatch({ type: "BACKLOG", payload: "NO" })}
                                    checked={NO}
                                />
                                No
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>dropper:</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="dropper"
                                    onChange={() => dispatch({ type: "DROPPER", payload: "DYES" })}
                                    checked={DYES}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="dropper"
                                    onChange={() => dispatch({ type: "DROPPER", payload: "DNO" })}
                                    checked={DNO}
                                />
                                No
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>Gender:</legend>
                            <label>
                                <input
                                    type="checkbox"
                                    name="gender"
                                    onChange={() => dispatch({ type: "GENDER", payload: "MALE" })}
                                    checked={MALE}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="gender"
                                    onChange={() => dispatch({ type: "GENDER", payload: "FEMALE" })}
                                    checked={FEMALE}
                                />
                                Female
                            </label>
                        </fieldset>

                    </div>
                )}
                 


            </div>

            <div className="SHT">
                <table>
                    <thead>

                        <td>Name</td>
                        <td>Roll No.</td>
                        <td>Branch</td>
                        <td>10th Percentage</td>
                        <td>12th Percentage</td>
                        <td>CGPA</td>
                        <td>Graduation Year</td>
                        <td>Gender</td>
                        <td>Backlog</td>
                        <td>DROPPER</td>
                        <td>Email ID</td>
                        
                    </thead>
                    <tbody>
                        {
                            filteredData.map((user, index) => {
                                return <tr key={index}>

                                    <td>{user.name}</td>
                                    <td>{user.rollno}</td>
                                    <td>{user.branch}</td>
                                    <td>{user.ten}</td>
                                    <td>{user.twel}</td>
                                    <td>{user.cgpa}</td>
                                    <td>{user.graduationYear}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.backlog}</td>
                                    <td>{user.dropper}</td>
                                    <td>{user.email}</td>
                                   
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="newd"><Link to="/addstudent" style={{ color: 'white' }} className="new">Add New</Link></div>

            <div className="newd"><Link to="/deletestudent" style={{ color: 'white' }} className="new">Delete Student</Link></div>
            </div>

        </div>
    )
};

export default Student;
