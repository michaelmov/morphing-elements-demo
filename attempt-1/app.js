document.addEventListener("DOMContentLoaded", () => {

    // Cache DOM elements
    const appElement = document.querySelector('#app');
    const cardElements = document.getElementsByClassName('card');
    const articleView = document.querySelector('.article-view');

    // Add click event listener to each card
    for(card of cardElements) {
        card.addEventListener('click', function(e) {

            // Cache Dom elements dimensions/coordinates
            const thumbnailWidth = this.children[0].getBoundingClientRect().width;
            const thumbnailHeight = this.children[0].getBoundingClientRect().height;
            const thumbnailLeft = this.children[0].getBoundingClientRect().left;
            const thumbnailTop = this.children[0].getBoundingClientRect().top;


            //Clone the element
            const thumbnailClone = this.children[0].cloneNode(true);

            // Apply sizes and coordinates to cloned element
            thumbnailClone.style.position = 'fixed';
            thumbnailClone.style.top = thumbnailTop + 'px';
            thumbnailClone.style.left = thumbnailLeft + 'px';
            thumbnailClone.style.height = thumbnailHeight + 'px';
            thumbnailClone.style.width = thumbnailWidth + 'px';

            // Clear the app container
            appElement.innerHTML = '';

            // Add the cloned element to the app container
            appElement.appendChild(thumbnailClone);

            // Transform the newly appended element to its "destination"
            setTimeout(() => {
                thumbnailClone.style.transform = `translateX(-${thumbnailLeft}px) translateY(-${thumbnailTop}px)`;
                thumbnailClone.style.borderRadius = 0;
                thumbnailClone.style.width = '100%';
                thumbnailClone.style.height = '45vh';
            }, 0);

            // Clear the app container again and add the "destination" content.
            setTimeout(() => {
                appElement.innerHTML = '';
                articleView.classList.remove('d-none');
                appElement.appendChild(articleView);
            }, 500);

        })
    }
});