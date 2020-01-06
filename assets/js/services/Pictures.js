class Pictures {
    getPictures(city) {
        const PHOTO_API_TOKEN = 'd5fbdbc4ae0848723de931f78c74fb1622310a4dcbe00be8d17db8343b6f037b';

        return fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${PHOTO_API_TOKEN}`)
            .then(res => res.json());
    }

    randomPicturesIndex(max) {
        return Math.floor(Math.random() * max);
    }
    
    parsePictures(pictures) {
        return picturesBody = pictures.results.map(obj => {
            return obj.urls.raw;
        });
    }
    

}