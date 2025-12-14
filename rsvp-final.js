document.addEventListener('DOMContentLoaded', function() {
    const ADMIN_PASSWORD = "ADMINPass_2025";
    
    // Close welcome popup
    document.getElementById('closeWelcome').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('welcomeBox').style.display = 'none';
    });

    // Show projects popup when folder icon is clicked
    document.getElementById('folderIcon').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('projectsBox').style.display = 'block';
    });

    // Close projects popup
    document.getElementById('closeProjects').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('projectsBox').style.display = 'none';
    });

    // Close extra box
    document.getElementById('closeExtra').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('extraBox').style.display = 'none';
    });

    // Close media player
    document.getElementById('closeMedia').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('mediaBox').style.display = 'none';
    });

    // Close main RSVP popup
    document.getElementById('closePopup').addEventListener('click', function(event) {
        event.stopPropagation();
        const popup = document.getElementById('invitePopup');
        popup.classList.remove('visible');
        popup.style.display = 'none';
    });
    
    // Auto-open RSVP popup on page load
    document.getElementById('invitePopup').classList.add('visible');
    
    // Close profile box when clicking X
    document.getElementById('closeProfile').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('profileBox').style.display = 'none';
    });
    
    // Open messenger popup
    document.getElementById('messengerIcon').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('invitePopup').classList.add('visible');
    });
});