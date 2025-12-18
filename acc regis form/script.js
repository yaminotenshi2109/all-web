document.getElementById('registrationForm').addEventListener('submit', function(event) {
            // Stop the form from actually sending data so we can validate it first
            event.preventDefault(); 

            const emailValue = document.getElementById('email').value;
            const pass = document.getElementById('password').value;
            const confirmPass = document.getElementById('confirm').value;

            // 1. Check Email (Basic pattern validation)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailValue)) {
                alert("Invalid email address");
                return;
            }

            // 2. Check Passwords
            if (pass !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            // 3. Success
            alert("All register information are correct.");
        });