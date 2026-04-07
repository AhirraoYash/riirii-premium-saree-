import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';

export function Terms() {
  return (
    <div>
      <PageHeader title="Terms & Conditions" />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">1. Agreement to Terms</h2>
          <p className="mb-4">By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
          
          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">2. Use License</h2>
          <p className="mb-4">Permission is granted to temporarily download one copy of the materials on Riirii's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">3. Product Information</h2>
          <p className="mb-4">We make every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>

          <h2 className="text-primary font-serif text-2xl font-bold mb-4 mt-8">4. Pricing and Payment</h2>
          <p className="mb-4">Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
        </div>
      </div>
    </div>
  );
}
