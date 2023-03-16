async function displayUI() {    
    await signIn();

    // Display info from user profile
    const user = await getUser();
    var userName = document.getElementById('userName');
    userName.innerText = user.displayName;  

    
 

    // Hide login button and initial UI
    var signInButton = document.getElementById('signin');
    signInButton.style = "display: none";
    var content = document.getElementById('content');
    content.style = "display: block";
}

async function displayMeeting() {

 // Display Meeting Link
 const MeetingLink = await getMeeting();
 var lnkMeeting = document.getElementById('MeetingLink');
  var meetingDiv = document.getElementById("meetingUrlContainer");
  meetingDiv.innerHTML = "<a href='" + MeetingLink.joinWebUrl + "' target='_blank'>" + "Meeting Link to Join" + "</a>";
}
