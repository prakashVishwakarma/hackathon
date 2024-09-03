import { useState } from 'react';
import './SearchFilterTags.css'
import WhiteButton from '../../buttons/WhiteButton/WhiteButton';

const SearchFilterTags = () => {

    // State to control dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown function
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='SearchFilterTagsContainer'>
            <h1>Exprore Challenges</h1>
            <div>
                <input type="search" name="search" id="" />


                <div className="dropdownContainer">
                    <div className="dropdownHeader" onClick={toggleDropdown}>
                        <span>Filter</span>
                        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
                    </div>
                    {isOpen && (
                        <div className="dropdownContent">
                            {/* Status Section */}
                            <div className="section">
                                <h4>Status</h4>
                                <div className="checkboxGroup">
                                    <label>
                                        <input type="checkbox" /> All
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Active
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Upcoming
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Past
                                    </label>
                                </div>
                            </div>
                            {/* Level Section */}
                            <div className="section">
                                <h4>Level</h4>
                                <div className="checkboxGroup">
                                    <label>
                                        <input type="checkbox" /> Easy
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Medium
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Hard
                                    </label>
                                </div>
                            </div>
                            <WhiteButton text={'Done'} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchFilterTags
