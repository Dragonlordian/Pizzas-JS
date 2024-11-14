import React from 'react'
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />
        
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Customizable" value="1"/>
                <FilterCheckbox text="New" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price min and max:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={5} max={1000} placeholder="max: 100 €" />
                </div>

                <RangeSlider min={0} max={100} step={1.0} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup 
                title="Ingridients"
                className='mt-5'
                limit={6}
                defaultItems={[{text: "1", value:"1"},
                    {text: "2", value:"2"},
                    {text: "3", value:"3"},
                    {text: "4", value:"4"},
                    {text: "5", value:"5"},
                    {text: "6", value:"6"},
                    {text: "7", value:"7"},
                    {text: "8", value:"8"},
                    {text: "9", value:"9"},
                    {text: "0", value:"0"},
                ]}
                items={[{text: "1", value:"1"},
                    {text: "2", value:"2"},
                    {text: "3", value:"3"},
                    {text: "4", value:"4"},
                    {text: "5", value:"5"},
                    {text: "6", value:"6"},
                    {text: "7", value:"7"},
                    {text: "8", value:"8"},
                    {text: "9", value:"9"},
                    {text: "0", value:"0"},
                ]}
            />
        </div>
    );
};
