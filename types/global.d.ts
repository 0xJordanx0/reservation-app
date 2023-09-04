type SubCategory = {
    name: string;
    href: string;
};

type FilterOption = {
    value: string;
    label: string;
    checked: boolean;
};
  
type Filter = {
    id: string;
    name: string;
    options: FilterOption[];
};

export {SubCategory, FilterOption, Filter};