document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = [
        'images/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg',
        'images/MFD_GW_hero_1_HDFC-2x1._CB598114774_.jpg',
        'images/Skincare-PCzzz._CB597786106_.jpg',
        'images/PC2._CB598223457_.jpg',
        'images/Rec_pc_herofader3_3000-1200._CB598032350_.jpg'
    ];
    
    let currentIndex = 0;
    const heroSection = document.querySelector('.hero-section');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    // Function to set the background image
    function setBackgroundImage(index) {
        heroSection.style.backgroundImage = `url(${backgroundImages[index]})`;
    }
    
    // Button click handlers
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
        setBackgroundImage(currentIndex);
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        setBackgroundImage(currentIndex);
    });
    
    // Automatic background image change after 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        setBackgroundImage(currentIndex);
    }, 15000);
    
});


document.addEventListener('DOMContentLoaded', function() {
    const boxContainer = document.querySelector('.box-container');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    let scrollAmount = 220; // Adjust this value to control scrolling distance
    
    prevButton.addEventListener('click', () => {
        boxContainer.scrollLeft -= scrollAmount;
    });
    
    nextButton.addEventListener('click', () => {
        boxContainer.scrollLeft += scrollAmount;
    });
});

