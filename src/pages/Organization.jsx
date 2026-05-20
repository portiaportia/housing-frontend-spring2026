import React from "react";
import { SignedIn, OrganizationProfile, useOrganization } from "@clerk/clerk-react";

const Organization = () => {
  const { membership } = useOrganization();

  const isAdmin = membership?.role === "org:admin";

   return (
      <main id="schedule" className="main-content">
      <SignedIn>
        {!isAdmin ? (
          <div>Unauthorized</div>
        ) : (
          <OrganizationProfile />
        )}
      </SignedIn>
    </main>
    );
};

export default Organization;