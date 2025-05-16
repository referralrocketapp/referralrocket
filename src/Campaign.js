import React, { useEffect } from "react"

const Campaign = ({ campaignId, email, firstName, lastName }) => {

    useEffect(() => {
        if (!campaignId) {
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://app.referralrocket.io/widget/widgetIndex.js';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            const script = document.querySelector(`script[src="https://app.referralrocket.io/widget/widgetIndex.js"]`);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [campaignId]);

    return (
        <div
            className="hype_widget"
            campaign-id={campaignId}
            email={email}
            first-name={firstName}
            last-name={lastName}
        >
        </div>
    );

}

export default Campaign