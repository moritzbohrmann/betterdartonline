import React from "react";
import { useDispatch } from "react-redux";
import { Card, Flex, Input, Text, Title } from "../components/@ui/_collection";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterCard() {
   const dispatch = useDispatch();

   const [fixed, setFixed] = React.useState(false);

   const popCard = () => {
      if (window.scrollY >= 650) setFixed(true); //* When FilterCard is no longer visible
      if (window.scrollY <= 650) setFixed(false);
      if (window.scrollY >= 1000) setFixed(false);
   };

   React.useEffect(() => {
      window.addEventListener("scroll", popCard);

      return () => {
         window.removeEventListener("scroll", popCard);
      };
   }, []);

   return (
      <>
         <Card>
            <Title subTitle="Searching for a particular player?">Filter</Title>
            <Flex justify="between" align="center" className="w-full">
               <Text>Keywords</Text>
               <Input placeholder="your keywords" onChange={(e) => dispatch(applyFilter(e.target.value))} />
            </Flex>
         </Card>
         {fixed === true && (
            <Card className="fixed bottom-1 bg-opacity-50 shadow-md backdrop-blur-lg">
               <Flex justify="between" align="center" className="w-full">
                  <Text weight="b">Keywords</Text>
                  <Input placeholder="your keywords" onChange={(e) => dispatch(applyFilter(e.target.value))} />
               </Flex>
            </Card>
         )}
      </>
   );
}

export default FilterCard;
