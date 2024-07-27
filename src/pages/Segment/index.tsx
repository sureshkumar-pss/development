import  {Segment}  from "./Segment";
import { SegmentContextProvider } from "./SegmentContext";
function SegmentContainer (){
    return (
        <SegmentContextProvider>
            <Segment />
        </SegmentContextProvider>
    )
}
export default SegmentContainer;