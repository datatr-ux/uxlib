import React, { ReactNode, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectClear,
  MultiSelectClose,
  MultiSelectAllItems,
  MultiSelectSeparator,
  MultiSelectOptions,
  MultiSelectGroup,
  MultiSelectEmpty,
  MultiSelecSearchInput,
} from "../ui/multi-select";
import { Bell, Home, User, Settings, LogOut } from "lucide-react";

// Storybook metadata
export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

// Example options with icons
const options = [
  { label: "Home", value: "home", icon: Home },
  { label: "Profile", value: "profile", icon: User },
  { label: "Notifications", value: "notifications", icon: Bell },
  { label: "Settings", value: "settings", icon: Settings },
  { label: "Logout", value: "logout", icon: LogOut },
];

// Base Template
const Template: StoryFn = (args) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(args.defaultValue || []);
  const maxDisplayed = args.maxCount || 3;

  return (
    <div>
    <MultiSelect value={selectedValues} onChange={setSelectedValues} disabled={args.disabled}>
      <MultiSelectTrigger placeholder={args.placeholder} className="w-[280px]">
        {selectedValues.slice(0, maxDisplayed).map((val) => {
          const option = options.find((o) => o.value === val);
          return (
            <MultiSelectValue
              key={val}
              value={val}
              onRemove={() => setSelectedValues(selectedValues.filter((v) => v !== val))}
            >
              {option?.icon && <option.icon className="mr-1 h-4 w-4" />}
              {option?.label}
            </MultiSelectValue>
          );
        })}
        {selectedValues.length > maxDisplayed && (
          <MultiSelectValue
            value="__extra__"
            onRemove={() => setSelectedValues(selectedValues.slice(0, maxDisplayed))}
          >
            +{selectedValues.length - maxDisplayed} more
          </MultiSelectValue>
        )}
      </MultiSelectTrigger>
      <MultiSelectContent>
          <MultiSelecSearchInput placeholder="Search..." />
          <MultiSelectOptions>
            <MultiSelectEmpty>No result found</MultiSelectEmpty>
            <MultiSelectGroup heading="Options">
              <MultiSelectAllItems>(Select all)</MultiSelectAllItems>
              {options.map((opt) => (
                <MultiSelectItem key={opt.value} value={opt.value}>
                  {opt.icon && <opt.icon className="mr-1 h-4 w-4" />}
                  {opt.label}
                </MultiSelectItem>
              ))}
                <MultiSelectItem key={'disabled'} value={'disabled'} className="test" disabled>
                {'disabled'}
                </MultiSelectItem>
              </MultiSelectGroup>
          <MultiSelectSeparator />
        </MultiSelectOptions>
        <div className="flex items-center justify-between">
          { selectedValues.length > 0 && (
            <MultiSelectClear>{args.labelClear as ReactNode || "Clear"}</MultiSelectClear>
          )}
          <MultiSelectClose>{args.labelClose as ReactNode || "Close"}</MultiSelectClose>
        </div>
      </MultiSelectContent>
    </MultiSelect>
    Values: 
    <ul className="list-disc list-inside">
      {selectedValues.map(v => <li key={v}>{v}</li>)}
    </ul>
  </div>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  placeholder: "Select options",
  placeholderSearch: "Search...",
  labelClear: "Clear",
  labelClose: "Close",
  maxCount: 3,
  defaultValue: [],
  disabled: false,
};

// Preselected
export const PreselectedValues = Template.bind({});
PreselectedValues.args = {
  ...Default.args,
  defaultValue: ["home", "profile"],
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  defaultValue: ["home", "profile"],
  disabled: true,
};

// Limited visible items
export const LimitedMaxCount = Template.bind({});
LimitedMaxCount.args = {
  ...Default.args,
  maxCount: 2,
  defaultValue: ["home", "profile", "notifications"],
};

// Custom labels
export const CustomLabels = Template.bind({});
CustomLabels.args = {
  placeholder: "Choose options...",
  placeholderSearch: "Type to filter...",
  labelClear: "Remove all",
  labelClose: "Done",
  maxCount: 2,
  defaultValue: ["settings", "logout"],
};

const CustomTemplate: StoryFn = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const maxDisplayed = 3;

  return (
    <div>
    <MultiSelect value={selectedValues} onChange={setSelectedValues} disabled={false}>
      <MultiSelectTrigger placeholder={"Selectionnez une ou plusieurs valeurs"} className="w-[400px] bg-blue-50 hover:bg-blue-100 active:bg-blue-100">
        {selectedValues.slice(0, maxDisplayed).map((val) => {
          const option = options.find((o) => o.value === val);
          return (
            <MultiSelectValue
              key={val}
              value={val}
              onRemove={() => setSelectedValues(selectedValues.filter((v) => v !== val))}
              className="bg-green-500"
            >
              {option?.icon && <option.icon className="mr-1 h-4 w-4" />}
              {option?.label}
            </MultiSelectValue>
          );
        })}
        {selectedValues.length > maxDisplayed && (
          <MultiSelectValue
            className="bg-green-100 text-black"
            onRemove={() => setSelectedValues(selectedValues.slice(0, maxDisplayed))}
          >
            +{selectedValues.length - maxDisplayed} more
          </MultiSelectValue>
        )}
      </MultiSelectTrigger>
      <MultiSelectContent className="w-[400px]" classNameCommand="bg-green-50" >
          <MultiSelecSearchInput placeholder="Rechercher" />
          <MultiSelectOptions className="bg-yellow-50">
            <MultiSelectEmpty className="py-6 text-center text-sm bg-neutral-100">Pas de résultat</MultiSelectEmpty>
            <MultiSelectGroup heading="Options">
              <MultiSelectAllItems className="bg-yellow-50" >Tout sélectionner</MultiSelectAllItems>
              {options.map((opt) => (
                <MultiSelectItem key={opt.value} value={opt.value} 
                  className="data-[selected=true]:bg-gray-50 data-[selected=true]:font-semibold rounded-r-md"
                  checkBoxClassName="data-[state=checked]:bg-green-500 data-[state=checked]:text-primary-foreground">
                  {opt.icon && <opt.icon className="mr-1 h-4 w-4" />}
                  {opt.label}
                </MultiSelectItem>
              ))}
              </MultiSelectGroup>
          <MultiSelectSeparator />
          <MultiSelectGroup heading="Disabled Options">
                <MultiSelectItem key={'disabled'} value={'disabled'} className="test" disabled>
                {'disabled'}
                </MultiSelectItem>
            </MultiSelectGroup>
        </MultiSelectOptions>
        <div className="flex items-center justify-between">
          { selectedValues.length > 0 && (
            <MultiSelectClear className="bg-red-200 data-[selected=true]:bg-red-500 data-[selected=true]:text-red-100 text-red-800" >Réinitialiser</MultiSelectClear>
          )}
          <MultiSelectClose className="bg-blue-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-blue-100 text-blue-800">Fermer</MultiSelectClose>
        </div>
      </MultiSelectContent>
    </MultiSelect>
    Values: 
    <ul className="list-disc list-inside">
      {selectedValues.map(v => <li key={v}>{v}</li>)}
    </ul>
  </div>
  );
};

export const FullCustomisation = CustomTemplate.bind({});
CustomLabels.args = {
  defaultValue: ["settings", "logout"],
};
