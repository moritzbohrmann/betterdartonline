import React from "react";
import { toast } from "react-toastify";
import { Button, Card, Flex, Input, Separator, Text, Title } from "../components/@ui/_collection";

function NewsletterCard() {
   const mailRef = React.useRef(null);

   const handleSubscribtion = (e) => {
      e.preventDefault();
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully subscribed to our newsletter.");
   };

   const handleUnsubscribtion = (e) => {
      e.preventDefault();
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully unsubscribed from our newsletter.");
   };

   return (
      <Card size="fill" className="max-h-64">
         <Title subTitle="Subscribe to our newsletter so you don't miss an update!">Newsletter</Title>
         <form>
            <Flex orientation="wrap" align="center" justify="center" gap="4">
               <Input type="email" ref={mailRef} placeholder="E-Mail" className="w-[19rem]" />
               <Flex justify="between" className="w-[19rem] 2xl:w-[17rem]">
                  <Button type="submit" variant="positive" alignX="none" onClick={(e) => handleSubscribtion(e)}>
                     Subscribe
                  </Button>
                  <Button type="submit" variant="negative" alignX="none" onClick={(e) => handleUnsubscribtion(e)}>
                     Unsubscribe
                  </Button>
               </Flex>
            </Flex>
         </form>
      </Card>
   );
}

export default NewsletterCard;
