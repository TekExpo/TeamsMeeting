// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    }
};
// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
//Get user info from Graph
async function getUser() {
    ensureScope('user.read');
    return await graphClient
        .api('/me')
        .select('id,displayName')
        .get();
}


async function getMeeting() {
    
    const onlineMeeting = {
      startDateTime: '2019-07-12T14:30:34.2444915-07:00',
      endDateTime: '2019-07-12T15:00:34.2464912-07:00',
      subject: 'User meeting in Microsoft Teams channel.',
      joinMeetingIdSettings: {
        isPasscodeRequired: false
      }
    };
    
    return await graphClient.api('/me/onlineMeetings')
        .post(onlineMeeting);




   // const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
    var meetingDetails = {
        startDateTime: new Date().toISOString(),
        endDateTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        subject: "Teams Meeting",
        attendees: [
            {
                emailAddress: {
                    address: "attendee1@example.com"
                }
            },
            {
                emailAddress: {
                    address: "attendee2@example.com"
                }
            }
        ],
        isOnlineMeeting: true,
        onlineMeetingProvider: "teamsForBusiness"
    };
    
    ensureScope('user.read');
    return await graphClient
    .api("me/onlineMeetings")
    .post({body:meetingDetails});
    
}
