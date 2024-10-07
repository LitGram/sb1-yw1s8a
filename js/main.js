jQuery(document).ready(function($) {
    // Login modal functionality
    const loginBtn = $('#loginBtn');
    const logoutBtn = $('#logoutBtn');
    const loginModal = $('#loginModal');
    const closeBtn = $('.close');
    const studyGuidesLink = $('#studyGuidesLink');
    const studyGuidesSection = $('#study-guides');

    loginBtn.on('click', function() {
        loginModal.css('display', 'block');
    });

    closeBtn.on('click', function() {
        loginModal.css('display', 'none');
    });

    $(window).on('click', function(event) {
        if (event.target == loginModal[0]) {
            loginModal.css('display', 'none');
        }
    });

    // Form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        const password = $(this).find('input[type="password"]').val();
        
        // Here you would typically make an AJAX call to your WordPress login endpoint
        // For demonstration purposes, we'll just simulate a successful login
        simulateLogin(email, password);
    });

    logoutBtn.on('click', function() {
        // Here you would typically make an AJAX call to your WordPress logout endpoint
        // For demonstration purposes, we'll just simulate a logout
        simulateLogout();
    });

    function updateAuthUI(isLoggedIn) {
        loginBtn.toggle(!isLoggedIn);
        logoutBtn.toggle(isLoggedIn);
        studyGuidesLink.toggle(isLoggedIn);
        if (!isLoggedIn) {
            studyGuidesSection.hide();
        }
    }

    studyGuidesLink.on('click', function(e) {
        e.preventDefault();
        loadStudyGuides();
    });

    function loadStudyGuides() {
        // Here you would typically make an AJAX call to fetch study guides
        // For demonstration purposes, we'll just show a placeholder
        const studyGuidesList = $('#studyGuidesList');
        studyGuidesList.html('<p>Study guides would be loaded here.</p>');
        studyGuidesSection.show();
    }

    function simulateLogin(email, password) {
        // This is a placeholder for actual login logic
        console.log('Login attempted with:', email, password);
        loginModal.css('display', 'none');
        updateAuthUI(true);
        loadStudyGuides();
    }

    function simulateLogout() {
        // This is a placeholder for actual logout logic
        console.log('User logged out');
        updateAuthUI(false);
    }

    // CTA button
    $('#ctaButton').on('click', function() {
        alert('This would lead to a sign-up page in a full implementation.');
    });

    // Subscription buttons
    $('.subscribe-btn').on('click', function() {
        alert('This would lead to a payment gateway in a full implementation.');
    });
});