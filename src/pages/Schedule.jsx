import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { SignedIn, OrganizationProfile } from "@clerk/clerk-react";

const Schedule = () => {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

    return (
        <main id="schedule" className="main-content">
          <SignedIn>
            <Cal namespace="15min"
                calLink="portia-plante-f2lfae/30min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}} />; 
        </SignedIn>
        </main>
    );
};

export default Schedule;