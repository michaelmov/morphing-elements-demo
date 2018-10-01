/* eslint-disable */ 
export default class GhostRouter {
	constructor(ghostContainer) {
		this.ghostContainer_ = ghostContainer;
		this.sharedElement_;
		this.sharedElementPosition_;
		this.prevUrl = null;
		this.currentUrl = window!==undefined?window.location.href:'';
	}

	setRoute(url) {
		this.prevUrl = this.currentUrl;
		this.currentUrl = url;
	}

	getPrevUrl() {
		return this.prevUrl;
	}


	clearGhostContainer_() {
		this.sharedElement_ = null;
		this.sharedElementPosition_ = null;
		this.ghostContainer_.innerHTML = '';
	}

	addSharedElement(element, cardBoundingRect) {
		this.sharedElement_ = element;
		this.sharedElementPosition_ = cardBoundingRect;
		element.classList.add('shared-element');
		element.style.top = `${cardBoundingRect.top}px`;
		element.style.left = `${cardBoundingRect.left}px`;
		element.style.height = `${cardBoundingRect.height}px`;
		element.style.width = `${cardBoundingRect.width}px`;
        element.style.transitionDuration = '500ms';
        element.style.position = 'absolute';
		this.ghostContainer_.appendChild(this.sharedElement_);
	}

	runAnimation({ top, left = 0, height, width }) {
		return new Promise((resolve, reject) => {
			try {
				const verticalTravelDistance = top - this.sharedElementPosition_.top;
                const horizontalTravelDistance = left - this.sharedElementPosition_.left;
                
				requestAnimationFrame(() => {
                    this.sharedElement_.style.transform = `translateY(${verticalTravelDistance}px) translateX(${horizontalTravelDistance}px)`;
                    this.sharedElement_.style.height = `${height}px`;
                    this.sharedElement_.style.width = `${width}px`;
                });
                
                this.ghostContainer_.addEventListener('transitionend', () => {
                    this.sharedElement_ && this.sharedElement_.remove();
                    this.clearGhostContainer_();
                    resolve();
                }, { once: true });
			}
			catch (e) {
        		console.error(e);
				this.clearGhostContainer_();
				reject();
			}
		});
	}
}