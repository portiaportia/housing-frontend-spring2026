import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Schedule = () => {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

    return (
        <main id="schedule" className="main-content">
            <Cal namespace="15min"
                calLink="portia-plante-f2lfae/30min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}} />;
        </main>
    );
};

export default Schedule;