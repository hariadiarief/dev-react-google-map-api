import React, { useState } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAutoCompleteLocation, setSelectedLoaction } from "../Store/Action/GoogleMap";


export const InputPlaceAutocomplete = (props) => {
    const dispatch = useDispatch()

    const autoCompleteLocation = useSelector((state) => state.googleMap.autoCompleteLocation)
    const [value, setValue] = useState();

    let timeout = null;
    const fetch = (value) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        const autoCompleteLocation = () => dispatch(getAutoCompleteLocation({ q: value }))
        timeout = setTimeout(autoCompleteLocation, 500);
    };

    const handleSearch = (newValue) => {
        fetch(newValue);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(setSelectedLoaction(newValue))
    };

    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            allowClear
            size={'large'}
            notFoundContent={null}
            options={(autoCompleteLocation || []).map((d) => ({
                value: d.description,
                label: d.description,
            }))}
        />
    );
};
