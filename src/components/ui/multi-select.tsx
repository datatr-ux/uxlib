"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem, CommandGroup } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/* -------------------- Context -------------------- */
type MultiSelectContextValue = {
  value: string[];
  setValue: (val: string[]) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleValue: (val: string) => void;
  allValues: Set<string>;
  registerValue: (val: string) => void;
  disabled: boolean;
};

const MultiSelectContext = React.createContext<MultiSelectContextValue | null>(null);

const useMultiSelectContext = () => {
  const ctx = React.useContext(MultiSelectContext);
  if (!ctx) throw new Error("MultiSelect components must be used inside <MultiSelect>");
  return ctx;
};

/* -------------------- Root -------------------- */
interface MultiSelectProps {
  value: string[];
  onChange: (val: string[]) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const MultiSelect = ({ value, onChange, disabled = false, children }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [registeredValues, setRegisteredValues] = React.useState<Set<string>>(new Set());

  const registerValue = React.useCallback((val: string) => {
    setRegisteredValues((prev) => new Set(prev).add(val));
  }, []);

  const toggleValue = React.useCallback(
    (val: string) => {
      if (value.includes(val)) {
        onChange(value.filter((v) => v !== val));
      } else {
        onChange([...value, val]);
      }
    },
    [value, onChange]
  );

  const ctxValue: MultiSelectContextValue = {
    value,
    setValue: onChange,
    isOpen,
    setIsOpen,
    toggleValue,
    allValues: registeredValues,
    registerValue,
    disabled,
  };

  return (
    <MultiSelectContext.Provider value={ctxValue}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Popover>
    </MultiSelectContext.Provider>
  );
};
MultiSelect.displayName = "MultiSelect";

/* -------------------- Trigger -------------------- */
interface MultiSelectTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
  children: React.ReactNode;
}

const MultiSelectTrigger = React.forwardRef<HTMLButtonElement, MultiSelectTriggerProps>(
  ({ className, placeholder = "Select...", children, ...props }, ref) => {
    const { value, disabled } = useMultiSelectContext();

    return (
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          ref={ref}
          variant="neutral"
          mode={"outline"}
          role="combobox"
          className={cn("min-h-10 h-auto flex flex-wrap justify-start gap-2 hover:bg-background active:bg-background focus:bg-background", className)}
          {...props}
        >
          {value.length > 0 ? (
            children
          ) : (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
    );
  }
);
MultiSelectTrigger.displayName = "MultiSelectTrigger";

/* -------------------- Value -------------------- */
interface MultiSelectValueProps extends React.HTMLAttributes<HTMLDivElement>  {
  children: React.ReactNode;
  onRemove?: () => void;
  value?: string;
}

const MultiSelectValue = ({ children, onRemove, value, className, ...props }: MultiSelectValueProps) => {
  const { value: selectedValues, setValue } = useMultiSelectContext();

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    } else {
      setValue(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-primary text-white rounded px-2 py-1 text-xs",
        className
      )}
      {...props}
    >
        {children}
        <div className="ml-2 p-0" onClick={(e) => {
           e.stopPropagation();
            handleRemove();
          }}>
            <XCircle className="h-3 w-3 cursor-pointer" />
        </div>
    </div>
  );
};
MultiSelectValue.displayName = "MultiSelectValue";

/* -------------------- Content -------------------- */
interface MultiSelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classNameCommand?: string;
}

const MultiSelectContent = ({ className, classNameCommand, children, ...props }: MultiSelectContentProps) => {
  return (
    <PopoverContent
      align="start"
      className={cn("w-[280px] p-0", className)}
      {...props}
    >
      <Command className={cn("p-2", classNameCommand)}>
          {children}
      </Command>
    </PopoverContent>
  );
};
MultiSelectContent.displayName = "MultiSelectContent";

const MultiSelectOptions = ({ className, children }: {className?: string; children: React.ReactNode}) => {
  return (
    <CommandList className={cn(className)}>
      {children}
    </CommandList>
  );
};
MultiSelectOptions.displayName = "MultiSelectOptions";

/* -------------------- Input -------------------- */
const MultiSelecSearchInput = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof CommandInput>) => (
  <CommandInput {...props}>{children}</CommandInput>
);
MultiSelecSearchInput.displayName = "MultiSelecSearchInput";

/* -------------------- Empty -------------------- */
const MultiSelectEmpty = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof CommandEmpty>) => (
  <CommandEmpty {...props}>{children}</CommandEmpty>
);
MultiSelectEmpty.displayName = "MultiSelectEmpty";

/* -------------------- Item -------------------- */
interface MultiSelectItemProps extends Omit<React.ComponentPropsWithoutRef<typeof CommandItem>, "value"> {
  value: string;
  className?: string;
  checkBoxClassName?: string;
}

const MultiSelectItem = ({ value, children, disabled, className, checkBoxClassName, ...props }: MultiSelectItemProps) => {
  const { value: selectedValues, toggleValue, registerValue } = useMultiSelectContext();
  const isSelected = selectedValues.includes(value);

  React.useEffect(() => {
    if (!disabled) registerValue(value);
  }, [value, registerValue, disabled]);

  return (
    <CommandItem
      onSelect={() => {toggleValue(value)}}
      className={cn("cursor-pointer", className)}
      disabled={disabled}
      {...props}
    >
      <Checkbox checked={isSelected} className={cn("mr-2", checkBoxClassName)} />
      {children}
    </CommandItem>
  );
};
MultiSelectItem.displayName = "MultiSelectItem";

/* -------------------- Group -------------------- */
const MultiSelectGroup = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof CommandGroup>) => (
  <CommandGroup {...props}>{children}</CommandGroup>
);
MultiSelectGroup.displayName = "MultiSelectGroup";

/* -------------------- Select All -------------------- */
interface MultiSelectAllItemProps extends Omit<React.ComponentPropsWithoutRef<typeof CommandItem>, "value"> {
  onClick?: () => void;
  className?: string;
  checkBoxClassName?: string;
}
const MultiSelectAllItems = ({
  children,
  onClick,
  className,
  checkBoxClassName,
}: MultiSelectAllItemProps) => {
  const { value, setValue, allValues } = useMultiSelectContext();
  const allSelected = value.length === allValues.size;

  const handleToggleAll = () => {
    if (onClick) {
      onClick();
    } else {
      if (allSelected) {
        setValue([]);
      } else {
        setValue(Array.from(allValues));
      }
    }
  };

  return (
    <CommandItem onSelect={handleToggleAll} className={cn("cursor-pointer", className)}>
      <Checkbox checked={allSelected} className={cn("mr-2", checkBoxClassName)} />
      {children}
    </CommandItem>
  );
};
MultiSelectAllItems.displayName = "MultiSelectAllItems";

interface MultiSelectCommandButton extends React.ComponentPropsWithoutRef<typeof CommandItem> {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

/* -------------------- Clear -------------------- */
const MultiSelectClear = ({
  children,
  onClick,
  className,
  ...props
}: MultiSelectCommandButton) => {
  const { setValue } = useMultiSelectContext();

  const handleClear = () => {
    if (onClick) {
      onClick();
    } else {
      setValue([]);
    }
  };

  return (
    <CommandItem
      onSelect={handleClear}
      className={cn(
        "cursor-pointer justify-center text-center flex-1",
        className,
      )}
      {...props}
    >
      {children}
    </CommandItem>
  );
};
MultiSelectClear.displayName = "MultiSelectClear";

/* -------------------- Close -------------------- */
const MultiSelectClose = ({
  children,
  onClick,
  className,
  ...props
}: MultiSelectCommandButton) => {
  const { setIsOpen } = useMultiSelectContext();

  const handleClose = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(false);
    }
  };

  return (
    <CommandItem
      onSelect={handleClose}
      className={cn(
        "cursor-pointer justify-center text-center flex-1 max-w-full",
        className,
      )}
      {...props}
    >
      {children}
    </CommandItem>
  );
};
MultiSelectClose.displayName = "MultiSelectClose";

/* -------------------- Separator -------------------- */
const MultiSelectSeparator = () => <Separator className="my-1" />;
MultiSelectSeparator.displayName = "MultiSelectSeparator";

/* -------------------- Exports -------------------- */
export {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectContent,
  MultiSelectOptions,
  MultiSelectItem,
  MultiSelectGroup,
  MultiSelectAllItems,
  MultiSelectClear,
  MultiSelectClose,
  MultiSelecSearchInput,
  MultiSelectEmpty,
  MultiSelectSeparator,
};
