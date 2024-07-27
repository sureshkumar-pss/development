import { createContext, useContext, useState } from "react";
// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

// Initializing the context here
const SegmentContext: any = createContext(null);
const list: any = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];
const SegmentContextProvider = ({ children }: any) => {
  const [openSegmentDrawer, setOpenSegmentDrawer] = useState(false);
  const [segmentName, setSegmentName]: any = useState("");

  const [options, setOptions]: any = useState(list);
  const [segmentList, setSegmentList]: any = useState([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [segmentValue, setSegmentValue]: any = useState(null);
  const [segmentError, setSegmentError]: any = useState(false);

  // handle Drawer Open
  const handleSegmentDrawerOpen = () => {
    setOpenSegmentDrawer(true);
  };
  //   handle SegmentDrawer Close when updated old values
  const handleSegmentDrawerClose = () => {
    setOpenSegmentDrawer(false);
    setSegmentName("");
    setSegmentList([]);
    setOptions(list);
    setSegmentValue(null);
  };
  //   remove segement if needed
  const handleRemoveSegment = (item: any, index: number) => {
    const updatedArray = [...segmentList];
    updatedArray.splice(index, 1);
    setSegmentList(updatedArray);
    // When i remove paticular item that item will be updated in options list
    setOptions([...options, item]);
  };
  //   Handles addition of a new schema
  const handleAddSegmentSchema = () => {
    if (inputValue) {
      setSegmentList([...segmentList, { ...segmentValue }]);
      const updatedOptions = options?.filter(
        (opt: any) => opt.value !== segmentValue?.value
      );
      setOptions(updatedOptions);
      setSegmentValue(null);
    }
  };
  //   updated segment list
  const handleEditSegment = (newValue: any, _item: any, index: number) => {
    if (newValue) {
      const updatedArray = [...segmentList];
      updatedArray[index] = newValue;
      const updatedOptions = list?.filter(
        (opt: any) => !updatedArray.find((a) => a.value === opt.value)
      );
      setSegmentList(updatedArray);
      setOptions(updatedOptions);
    }
  };
  const handleSegmentSubmit = () => {
    let payload: any = {
      segment_name: segmentName,
      schema: segmentList || [],
    };
    if (!segmentName || segmentList?.length == 0) {
      setSegmentError(true);
    } else {
      console.log("Segments", payload);
    }
  };
  return (
    <SegmentContext.Provider
      value={{
        openSegmentDrawer,
        setOpenSegmentDrawer,
        handleSegmentDrawerOpen,
        handleSegmentDrawerClose,
        options,
        setOptions,
        handleRemoveSegment,
        handleAddSegmentSchema,
        handleEditSegment,
        setSegmentValue,
        segmentValue,
        inputValue,
        setInputValue,
        segmentList,
        setSegmentList,
        setSegmentName,
        handleSegmentSubmit,
        segmentError,
        setSegmentError,
      }}
    >
      {children}
    </SegmentContext.Provider>
  );
};

function useSegment() {
  try {
    return useContext(SegmentContext);
  } catch (error) {
    console.log("Error using Coupons:", error);
    return null;
  }
}

export { useSegment, SegmentContext, SegmentContextProvider };
