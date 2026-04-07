import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';

export function Returns() {
  return (
    <div>
      <PageHeader title="Return & Refund Policy" />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">1. Return Window</h2>
          <p className="mb-4">We have a 7-day return policy, which means you have 7 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.</p>
          
          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">2. Return Process</h2>
          <p className="mb-4">To start a return, you can contact us at support@vastranand.in. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p>

          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">3. Damages and Issues</h2>
          <p className="mb-4">Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">4. Refunds</h2>
          <p className="mb-4">We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 5-7 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
        </div>
      </div>
    </div>
  );
}
