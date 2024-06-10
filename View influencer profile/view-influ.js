// document.querySelector('.close-btn').addEventListener('click', function() {
//     // Add functionality to close the profile modal or redirect as needed
//     alert('Close button clicked');
// });

// document.querySelector('.suspend-btn').addEventListener('click', function() {
//     // Add functionality to handle suspend action
//     alert('Suspend button clicked');
// });

const promoList = document.querySelector('.promo-list ul');
const promoNext = document.querySelector('.promo-next i');
const listItems = promoList.querySelectorAll('li');

// Function to scroll the promo list
function scrollPromoList() {
  promoList.scrollBy({ right: promoList.offsetWidth, behavior: 'smooth' });
}

// Function to add 'selected' class on click
function selectListItem(event) {
  listItems.forEach(item => item.classList.remove('selected'));
  event.target.classList.add('selected');
}

// Add click event listener to the chevron icon
promoNext.addEventListener('click', scrollPromoList);

// Add click event listener to each list item
listItems.forEach(item => item.addEventListener('click', selectListItem));
