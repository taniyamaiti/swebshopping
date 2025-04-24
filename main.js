document.querySelector('.login-btn').addEventListener('click', () => {
    document.querySelector('.user-form').classList.add('active');
    document.querySelector('.user.login').classList.add('active');
    document.querySelector('.user.signup').classList.remove('active');
});

document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.user-form').classList.remove('active');
});

document.querySelectorAll('.toggle-form').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        if (target === 'signup') {
            document.querySelector('.user.login').classList.remove('active');
            document.querySelector('.user.signup').classList.add('active');
        } else if (target === 'login') {
            document.querySelector('.user.signup').classList.remove('active');
            document.querySelector('.user.login').classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll('.quantity');

    function updateCart() {
        let totalSubtotal = 0;

        quantityInputs.forEach(input => {
            const price = parseFloat(input.dataset.price);
            const quantity = parseInt(input.value);
            const itemSubtotal = price * quantity;

            // Update the item subtotal in the table
            const row = input.closest('tr');
            const subtotalCell = row.querySelector('.subtotal');
            subtotalCell.textContent = `$${itemSubtotal.toFixed(2)}`;

            totalSubtotal += itemSubtotal;
        });

        const tax = totalSubtotal * 0.15; // 15% tax
        const total = totalSubtotal + tax;

        // Update the cart totals
        const totalRows = document.querySelectorAll('.total-price td');
        totalRows[1].textContent = `$${totalSubtotal.toFixed(2)}`; // Subtotal
        totalRows[3].textContent = `$${tax.toFixed(2)}`;            // Tax
        totalRows[5].textContent = `$${total.toFixed(2)}`;          // Total
    }

    // Trigger updateCart() when any quantity changes
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateCart);
    });

    // Initial update on page load
    updateCart();
});


