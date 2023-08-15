import React from "react";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Input } from "../components/@ui/Input";
import { Text } from "../components/@ui/Text";

function NewsletterCard() {
   const mailRef = React.useRef(null);

   const handleSubscribtion = () => {
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully subscribed to our newsletter.");
   };

   const handleUnsubscribtion = () => {
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully unsubscribed from our newsletter.");
   };

   return (
      <Card size="fill">
         <Title subTitle="Subscribe to our newsletter so you don't miss an update!">Newsletter</Title>
         <Flex orientation="wrap" align="center" justify="center" gap="4" className="m-auto xl:gap-8">
            <Text>E-Mail</Text>
            <Input ref={mailRef} size="xl" placeholder="your e-mail address" />
            <Flex gap="4">
               <Button variant="positive" onClick={handleSubscribtion}>
                  Subscribe
               </Button>
               <Button variant="negative" onClick={handleUnsubscribtion}>
                  Unsubscribe
               </Button>
            </Flex>
         </Flex>
      </Card>
   );
}

export default NewsletterCard;
