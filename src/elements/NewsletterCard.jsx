import React from "react";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Input } from "../components/@ui/Input";
import { Text } from "../components/@ui/Text";

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
               <Text>E-Mail</Text>
               <Input type="email" ref={mailRef} size="xl" placeholder="your e-mail address" />
               <Flex gap="4">
                  <Button type="submit" variant="positive" onClick={(e) => handleSubscribtion(e)}>
                     Subscribe
                  </Button>
                  <Button type="submit" variant="negative" onClick={(e) => handleUnsubscribtion(e)}>
                     Unsubscribe
                  </Button>
               </Flex>
            </Flex>
         </form>
      </Card>
   );
}

export default NewsletterCard;
