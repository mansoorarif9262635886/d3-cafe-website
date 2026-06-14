document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Rating Emojis Interactivity
    const ratingContainer = document.getElementById('rating-container');
    const ratingValueInput = document.getElementById('rating-value');
    const ratingError = document.getElementById('rating-error');

    if (ratingContainer) {
        const ratingButtons = ratingContainer.querySelectorAll('.rating-btn');
        ratingButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                ratingButtons.forEach(b => b.classList.remove('active'));
                
                // Add active to clicked button
                btn.classList.add('active');
                
                // Update hidden input
                const ratingValue = btn.getAttribute('data-rating');
                ratingValueInput.value = ratingValue;
                
                // Hide error message if shown
                if (ratingError) {
                    ratingError.style.display = 'none';
                }
            });
        });
    }

    // Pill Tags Toggle (What stood out to you?)
    const tagsContainer = document.getElementById('tags-container');
    if (tagsContainer) {
        const pillTags = tagsContainer.querySelectorAll('.pill-tag');
        pillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
            });
        });
    }

    // Photo Upload and Preview
    const photosInput = document.getElementById('photos-input');
    const previewGrid = document.getElementById('photo-preview-grid');
    let uploadedFiles = []; // Keep track of files locally

    if (photosInput && previewGrid) {
        photosInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            
            files.forEach(file => {
                // Validate file is image
                if (!file.type.startsWith('image/')) return;
                
                // Prevent duplicate files (by name and size)
                if (uploadedFiles.some(f => f.name === file.name && f.size === file.size)) return;
                
                uploadedFiles.push(file);
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'preview-image-wrapper';
                    
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.alt = file.name;
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.type = 'button';
                    removeBtn.className = 'remove-img-btn';
                    removeBtn.innerHTML = '<i class="fa fa-times"></i>';
                    
                    removeBtn.addEventListener('click', () => {
                        // Remove from uploadedFiles array
                        uploadedFiles = uploadedFiles.filter(f => f !== file);
                        wrapper.remove();
                    });
                    
                    wrapper.appendChild(img);
                    wrapper.appendChild(removeBtn);
                    previewGrid.appendChild(wrapper);
                };
                reader.readAsDataURL(file);
            });
            
            // Clear the file input value so same file can be selected again if removed
            photosInput.value = '';
        });
    }

    // Form Submission & Validation
    const form = document.getElementById('feedback-form');
    const successOverlay = document.getElementById('success-overlay');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // 1. Validate Rating
            const ratingValue = ratingValueInput.value;
            if (!ratingValue) {
                if (ratingError) ratingError.style.display = 'block';
                isValid = false;
            } else {
                if (ratingError) ratingError.style.display = 'none';
            }
            
            // 2. Validate Full Name
            const nameInput = document.getElementById('full-name');
            const nameError = document.getElementById('name-error');
            if (nameInput) {
                if (!nameInput.value.trim()) {
                    if (nameError) nameError.style.display = 'block';
                    nameInput.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    if (nameError) nameError.style.display = 'none';
                    nameInput.style.borderColor = '#d1d5db';
                }
            }
            
            // 3. Validate Mobile Number (10 digits)
            const mobileInput = document.getElementById('mobile-number');
            const mobileError = document.getElementById('mobile-error');
            const mobileRegex = /^[6-9]\d{9}$/;
            if (mobileInput) {
                if (!mobileRegex.test(mobileInput.value.trim())) {
                    if (mobileError) mobileError.style.display = 'block';
                    mobileInput.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    if (mobileError) mobileError.style.display = 'none';
                    mobileInput.style.borderColor = '#d1d5db';
                }
            }
            
            // 4. Validate Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput) {
                if (!emailRegex.test(emailInput.value.trim())) {
                    if (emailError) emailError.style.display = 'block';
                    emailInput.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    if (emailError) emailError.style.display = 'none';
                    emailInput.style.borderColor = '#d1d5db';
                }
            }
            
            // 5. Validate Branch Selection
            const branchSelect = document.getElementById('branch');
            const branchError = document.getElementById('branch-error');
            if (branchSelect) {
                if (!branchSelect.value) {
                    if (branchError) branchError.style.display = 'block';
                    branchSelect.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    if (branchError) branchError.style.display = 'none';
                    branchSelect.style.borderColor = '#d1d5db';
                }
            }
            
            // 6. Validate Message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (messageInput) {
                if (!messageInput.value.trim()) {
                    if (messageError) messageError.style.display = 'block';
                    messageInput.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    if (messageError) messageError.style.display = 'none';
                    messageInput.style.borderColor = '#d1d5db';
                }
            }
            
            // If all fields are valid, show success modal
            if (isValid) {
                // Extract tag selections
                const activeTags = [];
                const activePills = document.querySelectorAll('.pill-tag.active');
                activePills.forEach(pill => {
                    activeTags.push(pill.getAttribute('data-tag'));
                });
                
                // Submit to local storage simulated database
                if (typeof D3DB !== 'undefined') {
                    D3DB.submitFeedback({
                        fullName: nameInput.value.trim(),
                        mobileNumber: mobileInput.value.trim(),
                        email: emailInput.value.trim(),
                        branch: branchSelect.value,
                        rating: ratingValue,
                        tags: activeTags,
                        message: messageInput.value.trim(),
                        photos: uploadedFiles.map(f => f.name)
                    });
                }
                
                // Show custom modal
                if (successOverlay) {
                    successOverlay.classList.add('active');
                }
                
                // Reset form fields
                form.reset();
                
                // Clear rating active state
                const ratingButtons = ratingContainer.querySelectorAll('.rating-btn');
                ratingButtons.forEach(b => b.classList.remove('active'));
                ratingValueInput.value = '';
                
                // Clear active tags
                activePills.forEach(pill => pill.classList.remove('active'));
                
                // Clear preview grid and local files list
                previewGrid.innerHTML = '';
                uploadedFiles = [];
            }
        });
    }

    // Modal Close
    if (successOverlay) {
        successOverlay.addEventListener('click', (e) => {
            // If clicked outside the modal, dismiss it
            if (e.target === successOverlay) {
                successOverlay.classList.remove('active');
            }
        });
    }
});
