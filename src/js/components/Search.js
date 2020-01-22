class Search {
    constructor() {
        this.markup = this.renderSearch();
    }

    renderSearch() {
        return `<div class="black-bg">
                    <div class="search-block">
                        <input id="searchField" type="text" placeholder="Search city">
                        <button id="searchBtn" class="btn">Search</button>
                    </div>
                </div>`;
    }
}