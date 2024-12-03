document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-btn");
    const purchaseButton = document.getElementById("purchase-btn")
    const gnomeName = document.getElementById("gnome-name");
    const gnomePurchase = document.getElementById("gnome-purchase")
    const gnomeResult = document.getElementById("gnome-result");
    const gnomeResult2 = document.getElementById("gnome-result-2");


    // Function to generate a random gnome name
    function generateRandomName() {
        const names = ['Grimbold', 'Snorri', 'Tobius', 'Bramble', 'Muffin', 'Glimmer', 'Gnomeo', "Poppy", "Wizzle", "Fizwick", "Popsnot", "Mossy", "Bamblefoot", "Nibble", "Mushroot", "Grim", "Dwayne the Gnome Johnson", "Twiggle", "Rumbleblossom", "Gnobama", "Gnomer Simpson", "Gnoma Watson", "Squish", "John Doe", "Grimblebort"];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    // Handle "Create Gnome" button click
    submitButton.addEventListener("click", () => {
        const name = generateRandomName();
        gnomeName.textContent = `${name}`;
        gnomeResult.style.display = "block";
    });

    purchaseButton.addEventListener("click", () => {
        gnomePurchase.textContent = `Sorry, this feature is not implemented yet`;
        gnomeResult2.style.display = "block";
    });
});
